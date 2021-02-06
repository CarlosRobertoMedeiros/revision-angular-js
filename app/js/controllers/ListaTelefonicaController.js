angular.module("ListaTelefonica").controller("ListaTelefonicaController",function($http,$scope){
    $scope.app = "Lista Telefônica";
    
    $scope.classe = "selecionado";
    $scope.contatos = [];
    /*
    $scope.contatos = [
        {nome: $filter('uppercase') ("Pedro"), telefone: "99998888", data: new Date() ,operadora: {nome: "Oi",   codigo: 14, categoria: "Celular"} , cor:"blue"  },
        {nome: $filter('uppercase') ("Ana"),   telefone: "99998877", data: new Date() ,operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"} , cor:"yellow"},
        {nome: $filter('uppercase') ("Maria"), telefone: "99998866", data: new Date() ,operadora: {nome: "Tim",  codigo: 41, categoria: "Celular"} , cor:"red"   }
    ];
    */

    $scope.operadoras =[];

    var carregarContatos = function () {
        $http.get("http://localhost:3000/contatos")
            .then(function(response) {
                $scope.contatos = response.data;
            },function(response){
            console.log(response);
            });
    };

    var carregarOperadoras = function () {
        $http.get("http://localhost:3000/operadoras")
            .then(function(response) {
                $scope.operadoras = response.data;
            },function(response){
            console.log(response);
            });
    };

    $scope.adicionarContato = function(contato){
        //$scope.contatos.push(angular.copy(contato));
        contato.data = new Date();
        $http.post("http://localhost:3000/contatos",contato)
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