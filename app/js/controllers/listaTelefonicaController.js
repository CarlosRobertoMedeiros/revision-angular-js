angular.module("listaTelefonica").controller("listaTelefonicaController",function($http,$scope,contatosService,operadorasService,serialGeneratorService){
    $scope.app = "Lista Telefônica";
    
    $scope.classe = "selecionado";
    $scope.contatos = [];
    $scope.contato = {
        data: 376974000000
    };
    
    
    /*
    $scope.contatos = [
        {nome: $filter('uppercase') ("Pedro"), telefone: "99998888", data: new Date() ,operadora: {nome: "Oi",   codigo: 14, categoria: "Celular"} , cor:"blue"  },
        {nome: $filter('uppercase') ("Ana"),   telefone: "99998877", data: new Date() ,operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"} , cor:"yellow"},
        {nome: $filter('uppercase') ("Maria"), telefone: "99998866", data: new Date() ,operadora: {nome: "Tim",  codigo: 41, categoria: "Celular"} , cor:"red"   }
    ];
    */

    $scope.operadoras =[];

    var carregarContatos = function () {
        contatosService.getContatos()
            .then(function(response) {
                $scope.contatos = response.data;
            },function(response){
            console.log(response);
            });
    };

    var carregarOperadoras = function () {
        operadorasService.getOperadoras()
            .then(function(response) {
                $scope.operadoras = response.data;
            },function(response){
            //console.log(response);
            $scope.error = "Não foi possível carregar os dados !";
            });
    };

    $scope.adicionarContato = function(contato){
        //$scope.contatos.push(angular.copy(contato));
        contato.serial = serialGeneratorService.generate();
        contato.data = new Date();
        contatosService.saveContato(contato)
            .then(function(response) {
                if (response.data){
                    delete $scope.contato;
                    $scope.contatoForm.$setPristine();
                    carregarContatos();
                }
            },function(response){
                console.log(response);
            });
    };

    $scope.apagarContatos = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado)
                return contato;
        });
    };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    };

    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };

    carregarContatos();
    carregarOperadoras();

});