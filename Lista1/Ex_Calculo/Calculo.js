while (true) {
    num1 = prompt("Insira o primeiro número do cálculo: ")
    num1 = parseInt(num1)

    operacao = prompt("Insira a operação que deseja: (soma, subtração)")
    operacao = operacao.toLowerCase()

    num2 = prompt(`Insira o segundo número da ${operacao}: `)
    num2 = parseInt(num2)

    var resultado = 0;

    if (operacao === "soma"){
        resultado = num1 + num2
        sinal = "+"
        break;
    } else if (operacao === "subtração") {
        resultado = num1 - num2
        sinal = "-"
        break;
    } else {
        alert("Não foi possível realizar essa soma, tente inserir dois números inteiros e a operação (soma ou subtração).")
    }
}

document.write(`<h2> Seu resultado foi: ${num1} ${sinal} ${num2} = ${resultado}`)