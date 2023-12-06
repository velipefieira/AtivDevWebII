const express = require("express")
const app = express()
const ejs = require("ejs")
var sinal = 

app.set("view engine", "ejs");

app.get("/", function(req, resp){
    //const title = req.body.title
    resp.render("index", { title: "Calculadora online"});
});

app.get("/somasub", function(req, resp){
    resp.render("somasub", { title: "Calcular soma ou multiplicação"});
});



app.get("/multdiv", function(req, resp){
    resp.render("multdiv", { title: "Calcular multiplicação ou divisão"});
});

app.listen(3000, function (erro) {
    if (erro){
        console.log("Não foi possível iniciar o servidor");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});
