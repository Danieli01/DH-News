const express = require("express");

const app = express();

app.get('/', function(req, res){
    res.send('Está funcionando!');
});

app.listen(3000, function(){
    console.log("servidor rodandando http://localhost:3000");
});