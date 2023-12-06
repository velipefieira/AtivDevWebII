const express = require("express")
const app = express()
const ejs = require("ejs");
const bodyParser = require("body-parser")
//const db = require("./db");
const mysql = require('mysql2');

var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345',
    database: 'devweb2',
    multipleStatements: true
});

function inserirFuncionario(nome, idade, cargo){
    id_cargo = con.query("Select car_cod from cargo where car_nome = ?", [cargo])
    con.query("insert into funcionario (fun_nome, fun_idade, fun_cargo) values (?,?,?)", [nome, idade, id_cargo], (erro, resultado) => {
        if (erro) throw erro;
        })
}

function editarFuncionario(id, nome, idade, cargo){
    con.query("Update usuarios set nome = ?, email = ? where id = ?", [nome, email, id], (erro, resultado) => {
        if (erro) throw erro;
        })
}

/*function mostrarFuncionario() {
    func = con.query("Select fun_nome, fun_idade, car_nome, car_salario from funcionario f inner join cargo c on f.fun_cargo = c.car_id", (erro, resultado) => {
    if (erro) throw erro;
    console.log(resultado);
    return resultado;
})};*/

function excluirFuncionario(id){
    con.query("Delete from usuarios where id = ?", [id], (erro, resultado) => {
        if (erro) throw erro;
        })
}

app.set("view engine", "ejs");
//app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, resp){
    con.query("Select fun_id, fun_nome, fun_idade, car_nome, car_salario from funcionario f inner join cargo c on f.fun_cargo = c.car_id", (erro, resultado) => {
        if (erro) throw erro;
    resp.render("index", { title: "Index", funcionarios: resultado});
    });
})

app.get("/cadastro", function(req, resp){
    resp.render("cadastro", { title: "Cadastrar funcionário"});
});

app.post("/cadastro", async (req, res) => {
    const { nome, idade, cargo } = req.body;
    try {
        const [results, fields] = await con.promise().query("SELECT car_id FROM cargo WHERE car_nome = ?", [cargo]);
        const id_cargo = results[0].car_id;
        const insert = await con.promise().query("INSERT INTO funcionario (fun_nome, fun_idade, fun_cargo) VALUES (?, ?, ?)", [nome, idade, id_cargo]);
        res.redirect('/');
    } catch (erro) {
        console.error('Erro no cadastro:', erro);
        res.status(500).send('Erro interno do servidor', erro);
    }
});

app.get('/editar/:fun_id', (req, res) => {
    const id = req.params.fun_id;
    con.query("select * from funcionario where fun_id = ?", [id], (err, result) => {
      if (err) {
        console.error('Erro ao buscar registro para edição:', err);
        return;
      }
      res.render('editar', { title: "Editar funcionário",func: result[0] });
    });
});

app.post('/editar/:fun_id', async (req, res) => {
    const id = req.params.fun_id;
    const { nome, idade, cargo } = req.body;

    try {
        const [resultsCargo, fieldsCargo] = await con.promise().query("SELECT car_id FROM cargo WHERE car_nome = ?", [cargo]);
        const id_cargo = resultsCargo[0].car_id;

        const [resultsUpdate, fieldsUpdate] = await con.promise().query("UPDATE funcionario SET fun_nome = ?, fun_idade = ?, fun_cargo = ? WHERE fun_id = ?", [nome, idade, id_cargo, id]);
        
        res.redirect('/');
    } catch (erro) {
        console.error('Erro no update:', erro);
        res.status(500).send('Erro interno do servidor', erro);
    }
});



app.get('/deletar/:fun_id', (req, res) => {
    const id = req.params.fun_id;
    con.query('DELETE FROM funcionario WHERE fun_id = ?', [id], (err, result) => {
      if (err) {
        console.error('Erro ao excluir registro:', err);
        return;
      }
      res.redirect('/');
    });
  });


app.listen(3000, function (erro) {
    if (erro){
        console.log("Não foi possível iniciar o servidor");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});
