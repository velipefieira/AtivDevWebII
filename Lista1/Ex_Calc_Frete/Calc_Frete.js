var valor = 0;
var rastreio, pecas, distancia, regiao;

frete_regioes = {
    Sul: 1,
    Sudeste: 1.2,
    Centro_oeste: 1.3
}

frete_regioes_extra = {
    Sul: 0.9,
    Sudeste: 0.88,
    Centro_oeste: 0.87
}

taxas = {}

function rastrear(){
    rastreio = confirm("Deseja rastreamento do seu produto? ");
    if (rastreio) {
        valor += 200
        taxas.rastreio = 200
    } else {
        taxas.rastreio = 0
    }
}

function local(nome) {
    regiao = nome
    alert("Região selecionada: " + nome)
}

function dist() {
    distancia = prompt("Insira a distância da entrega em Km: (exemplo: 100, 150, 200)")
    parseInt(distancia)
    taxas.dist = distancia * 5.65
    taxas.dist = taxas.dist.toFixed(2)
    valor += taxas.dist
}

function qnt_pecas(){
    if (regiao === undefined) {
        alert("Selecione primeiro a região")
    } else {
        pecas = prompt("Insira a quantidade de peças que deseja: (exemplo: 500, 1000, 1500)");
        pecas = parseInt(pecas)
        if (pecas <= 1000) {
            valor += pecas * frete_regioes[regiao]
            taxas.pecas = pecas * frete_regioes[regiao]
        } if (pecas > 1000) {
            valor += (pecas - 1000) * frete_regioes_extra[regiao] + (1000 * frete_regioes[regiao])
            taxas.pecas = (pecas - 1000) * frete_regioes_extra[regiao] + (1000 * frete_regioes[regiao])
        }
    }
}

function confirma(){
    if (distancia == undefined || rastreio == undefined || pecas == undefined || regiao == undefined) {
        alert("Não foi possível calcular seu frete, tente preencher todos os requisitos.")
    } else {
        document.write(`<h2> No total, estes foram os valores: </h2>`)
        document.write(`<h3> Taxa de rastreio: ${taxas.rastreio} </h3>`)
        document.write(`<h3> Valor pelo frete das peças: ${taxas.pecas}</h3>`)
        document.write(`<h3> Valor do frete por quilômetro: ${taxas.dist}</h3>`)
        document.write(`<h3> Valor total do frete: ${valor}</h3>`)
    }
}