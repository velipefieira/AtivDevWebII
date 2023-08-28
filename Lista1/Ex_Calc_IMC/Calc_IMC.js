while (true) {
    var nome;
    var altura;
    var peso;

    nome = prompt("Insira seu nome:")        
    altura = prompt("Insira sua altura (em cm): ")
    parseInt(altura)
    peso = prompt("Insira seu peso (Kg.g): ")
    parseFloat(peso)
    
    var imc;
    m = peso/(altura/100 * altura/100);
    m = m.toFixed(2);
    console.log(m);
    if (m < 16){
        var imc = "Peso baixo muito grave"
        break;
    }
    else if (m < 17) {
        var imc = "Peso baixo grave"
        break;
    }
    else if (m < 18.5) {
        var imc = "Peso baixo"
        break;
    }
    else if (m < 25) {
        var imc = "Peso ideal"
        break;
    }
    else if (m < 30) {
        var imc = "Sobrepeso"
        break;
    }
    else if ( m < 35) {
        var imc = "Obesidade grau I"
        break;
    }
    else if (m < 40) {
        var imc = "Obesidade grau II"
        break;
    }
    else if(m <= 40) {
        var imc = "Obesidade grau II"
        break;
    }
    alert("Não foi possível fazer seu calculo, tente novamente")
    }
    document.write(`<h3 style ="text-align: center;"> ${nome} possui um índice de massa corporal igual a ${m}, sendo classificado como: ${imc}. </h3>`)