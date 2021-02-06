angular.module("ListaTelefonica").factory("contatosService", function($http,configValue){
    //Aqui o JS utiliza Função Fábrica
    var _getContatos = function(){
        return $http.get(configValue.baseUrl + "/contatos");
    };

    var _saveContato = function(contato){
        return $http.post(configValue.baseUrl + "/contatos", contato);
    };

    return {
        getContatos: _getContatos, 
        saveContato: _saveContato
    };

});