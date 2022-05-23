const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.set("view engine", "ejs");  //tem que ser declarado após a const app. tem que criar uma pasta views com um arquivo .ejs nela. Esse comando app.set que faz esse link com o arquivo.

app.use(bodyParser.urlencoded({ extended: true }))  //permite que o body parser pegue as info que o usuario passou pra fazer o post request.

app.use(express.static("public"));


// DECLARAÇÕES DE VARIAVEIS
let lista = []
let listaWork = []

// GETTERS

app.get("/", function (req, res) {


    let options = {
        diaDaSemana: "long",
        dia: "numeric",
        mes: "long"
    };   //utilizado pra formatar a hora

    let dia = new Date().toLocaleDateString("pt-BR", options);

    res.render("List", { titulo: dia, lista: lista });
    //renderizando uma response do arquivo ejs na pasta views chamado List, e passando o objeto como se fosse uma props, o nome que vc quer dar lá, e o valor na cosntante QUE POR ACASO EU USEI O MESMO NOME, mas pode ser nomes diferentes que nem o props faz.
    //primeiro ele faz o if else e depois ele envia a informação a ser renderizada.
});

app.get("/work", function(req, res){
res.render("List", {titulo: "Work List", lista: listaWork})

})

//POSTS REQUESTS

app.post("/", function (req, res) {

    let inputUsuario = req.body.inputUsuario;

    if(req.body.button === "Work List"){
        listaWork.push(inputUsuario)
        res.redirect("/work")
    } else{
        lista.push(inputUsuario)
        res.redirect("/")
    }
    // if pra saber de qual botão foi dado o submit, o que diferencia é o valor do botao, que no caso é o mesmo valor do titulo da pagina
  //quando um post request é solicitado, vai armazenar o valor do input, procurando pelo body, vai redirecionar pro home, que vai re-renderizar como valor do input que o usuario colocou.
});  //metodo post que devolve as info que o usuario colocou no body do browser.


app.post("/work", function(req, res){
    let inputUsuarioWork = req.body.inputUsuarioWork
    listaWork.push(inputUsuarioWork)
    res.redirect("/work")
})

// LISTENERS

app.listen(3000, function () {
    console.log("Servidor Iniciado");
})