var valor_hora = 0;
var auxilio = 0;

let codigo = prompt("Insira o codigo do funcionário: ")
parseInt(codigo)
let horas = prompt("Insira a quantidade de horas trabalhadas no mês: (Ex: 150, 160, 180)")
parseInt(horas)
let salario_minimo = prompt("Insira o valor do salário mínimo no seu estado: (Ex: 1000, 1100.50)")
parseInt(salario_minimo)

/*var turno = document.getElementById("turno");
var cargo = document.getElementById("cargo");*/

let turno = prompt("Insira o turno do funcionário: (Ex: M, V, N)")
let cargo = prompt("Insira o cargo do funcionário/gerente: (Ex: F/G)")
turno = turno.toUpperCase()
cargo = cargo.toUpperCase()

if (cargo == "G"){
    valor_hora = salario_minimo * 0.04
}
if (cargo == "F"){
    if (turno == "N") {
        valor_hora = salario_minimo * 0.02
    } else {
        valor_hora = salario_minimo * 0.01
    }
}

valor_hora = parseFloat(valor_hora.toFixed(2))
var salario_inicial = horas * valor_hora

if (salario_inicial <= 800) {
    auxilio = salario_inicial * 0.25
}
if (salario_inicial > 800 && salario_inicial <= 1200) {
    auxilio = salario_inicial * 0.20
} else {
    auxilio = salario_inicial * 0.10
}

auxilio = auxilio.toFixed(2)

document.write(`<h2> Código: ${codigo} </h2> <h2> Horas trabalhadas: ${horas} </h2> <h2> Valor da hora: ${valor_hora} </h2>`)
document.write(`<h2> Salário inicial: ${salario_inicial} </h2> <h2> Auxílio alimentação: ${auxilio} </h2> <h2> Salário final: ${salario_inicial + parseFloat(auxilio)} </h2>`)