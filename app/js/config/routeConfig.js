/*
angular.module("listaTelefonica").config(function($routeProvider){
    $routeProvider.when("/contatos",{
        templateUrl: "view/contatos.html",
        controller: "listaTelefonicaController"
    });
    $routeProvider.when("/novoContato",{
        templateUrl: "view/novoContato.html",
        controller: "listaTelefonicaController"
    });
});
*/

angular.module("listaTelefonica").config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
       });
       
    $routeProvider
        .when('/contatos', {
            templateUrl: "view/contatos.html",
            controller: "listaTelefonicaController"
        })
        .when('/novoContato', {
            templateUrl: "view/novoContato.html",
            controller: "listaTelefonicaController"
        })
        .otherwise({redirectTo: "view/problema.html"
        });
});
