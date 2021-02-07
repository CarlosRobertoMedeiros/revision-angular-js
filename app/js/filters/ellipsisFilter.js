angular.module("listaTelefonica").filter("ellipsis", function(){
    // size || 2 lógica do JS para boolean true e false
    return function (input, size){
        if (input.length <=size) return input;
        var output = input.substring(0,(size || 2))+"...";
        return output;
    }
});