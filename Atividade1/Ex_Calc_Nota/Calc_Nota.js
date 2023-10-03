var nota1;
var nota2;
var nota3;
let media;

nota1 = prompt("Insira a nota da atividade prática em Lab:")
nota2 = prompt("Insira a nota da prova semestral:")
nota3 = prompt("Insira a nota do trabalho teórico:")

parseInt(nota1)
parseInt(nota2)
parseInt(nota3)

media = (nota1 * 2) + (nota2 * 5) + (nota3 * 3)
media = media/10
media.toFixed(2)

if (media > 9) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é A </h3>`)
}
if (media > 8 && media <= 9) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é B </h3>`)
}
if (media > 7 && media <= 8) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é C </h3>`)
}
if (media > 6 && media <= 7) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é D </h3>`)
}
if (media > 5 && media <= 6) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é E </h3>`)
}
if (media <= 5) {
    document.write(`<h3 style='text-align: center'> A média do aluno é de ${media} e sua classificação é F </h3>`)
}
document.write(`<h3 style='text-align: center'> Notas do aluno: ${nota1}, ${nota2}, ${nota3} </h3>`)