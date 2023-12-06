/*var mysql = require('mysql2');

var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '12345',
    database: 'devweb2',
    multipleStatements: true
});

function init() {
    // Inicializações após a conexão ser estabelecida
    // Por exemplo:
    console.log('Inicialização após a conexão');
}



function inserirFuncionario(nome, idade, cargo){
    id_cargo = con.query("Select car_cod from cargo where car_nome = ?", [cargo])
    con.query("insert into funcionario (fun_nome, fun_idade, fun_cargo) values (?,?,?)", [nome, idade, id_cargo], (erro, resultado) => {
        if (erro) throw erro;
        console.log(`${nome} inserido com sucesso!`); 
        })
}

function editarFuncionario(id, nome, idade, cargo){
    con.query("Update usuarios set nome = ?, email = ? where id = ?", [nome, email, id], (erro, resultado) => {
        if (erro) throw erro;
        console.log(`${nome} editado com sucesso!`); 
        })
}

function mostrarFuncionario() {
    let func = con.query("Select fun_nome, fun_idade, car_nome, car_salario from funcionario f inner join cargo c on f.fun_cargo = c.car_id", (err, resultado) => {
        if (err) {
          console.error('Erro ao buscar registros:', err);
          return resultado;
        }
})}

function excluirFuncionario(id){
    con.query("Delete from usuarios where id = ?", [id], (erro, resultado) => {
        if (erro) throw erro;
        console.log(`${nome} excluido com sucesso!`); 
        })
}

module.exports = {inserirFuncionario,editarFuncionario, mostrarFuncionario, excluirFuncionario, connect: con, init: init};*/