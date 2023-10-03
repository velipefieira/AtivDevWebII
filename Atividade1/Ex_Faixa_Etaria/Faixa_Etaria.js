function idade_user() {
    let idade;
    idade = prompt("Insira sua idade: ")
    parseInt(idade)
    if (idade >= 0 && idade < 15) {
        alert("Sua faixa etária é Criança")
    }
    if (idade >= 15 && idade < 30){
        alert("Sua faixa etária é Jovem")
    }
    if (idade >= 30 && idade < 60) {
        alert("Sua faixa etária é Adulto")
    }
    if (idade >= 60){
        alert("Sua faixa etária é Idoso")
    }
}