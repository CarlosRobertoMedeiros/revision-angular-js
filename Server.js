var express = require('express');  
var app = express();  
  
app.use(express.static("App"));  
  
app.get('/', function (req, res) {  
    res.redirect('/');  
});  
  
app.listen(8080, 'localhost');  
console.log("MyProject Server is Listening on port 8080"); 
//Continuar ajustando o servidor de front end para utilizar o express