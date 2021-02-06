angular.module("ListaTelefonica").service("operadorasService", function($http,configValue){
    //Aqui o JS utiliza Função Construtora
    this.getOperadoras = function(){
        return $http.get(configValue.baseUrl + "/operadoras");
    }
});