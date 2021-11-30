// 1. a) Ele testa se o número é par.
//    b) Números pares.
//    c) Números ímpares.

// 2. a) Ele atribui o preço da fruta que foi digitida pelo usuário
//      na variavel "preco".
//    b) O preço da fruta Maçã é R$ 2.25
//    c) O preço da fruta Pêra é R$ 5. Isso porque, como após a validação
//      não possui o break, o código não para e continua até chegar no
//      default e atribuir o 5 ao "preco", é dessa forma que o Switch functiona.

// 3. a) Está pegando a string digitada pelo usuário e já transformando-o em número.
//    b) Esse número passou no teste & Essa mensagem é secreta!!! Para -10 vai dar erro.
//    c) Sim. Caso o número digitado pelo usuário seja negativo ele vai passar batido
//      no if, e quando chegar no console.log(mensagem) o "mensagem" não foi declarado
//      em lugar nenhum, pois ele está no escopo do if e só vai ser declarado caso a
//      comparação seja true.




// 1.
const idade = Number(prompt("Digite sua idade"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir!")
}



// 2.
const turno = prompt("Digite 'M' se seu tuno é matutino, 'V' se é vespertino ou 'N' se é noturno")

if (turno === "M") {
    console.log("Bom dia!")
} else if (turno === "V") {
    console.log("Boa tarde!")
} else if (turno === "N") {
    console.log("Boa noite!")
} else {
    console.log("Letra não correspondente")
}



// 3.
switch (turno) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
    default:
        console.log("Letra não correspondente")
        break
}



// 4.
const genero = prompt("Digite o gênero do filme que pretende assistir")
const preco = Number(prompt("Digite o preço do ingresso"))

if (genero.toLowerCase() === "fantasia" && preco < 15) {
    const lanchinho = prompt("Qual snack vai comprar?")
    console.log("Bom filme!")

    if (lanchinho[lanchinho.length - 1] === "a") {
        console.log(`Aproveite a sua ${lanchinho}`)
    } else {
        console.log(`Aproveite o seu ${lanchinho}`)
    }

} else {
    console.log("Escolha outro filme :(")
}



// Desafio 2.
const nome = prompt("Qual seu nome?")
const tipoDeJogo = prompt("Qual o tipo de jogo? IN (para internacional) ou DO (para doméstico).")
const etapaDeJogo = prompt("Qual a etapa do jogo? SF (para semi-final), DT (para decisão do terceiro lugar) ou FI (para final).")
const categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4?"))
const quantidadeIngressos = prompt("Quantos ingressos?")
let valor

if (etapaDeJogo.toUpperCase() === "SF") {
    switch (categoria) {
        case 1:
            valor = 1320
            break
        case 2:
            valor = 880
            break
        case 3:
            valor = 550
            break
        case 4:
            valor = 220
            break
    }
} else if (etapaDeJogo.toUpperCase() === "DT") {
    switch (categoria) {
        case 1:
            valor = 660
            break
        case 2:
            valor = 440
            break
        case 3:
            valor = 330
            break
        case 4:
            valor = 170
            break
    }
} else if (etapaDeJogo.toUpperCase() === "FI") {
    switch (categoria) {
        case 1:
            valor = 1980
            break
        case 2:
            valor = 1320
            break
        case 3:
            valor = 880
            break
        case 4:
            valor = 330
            break
    }
}

function tipoDoJogo (tipo) {
    if (tipo.toUpperCase() === "IN") {
        return 'Internacional'
    } else {
        return 'Nacional'
    }
}

function etapaDoJogo (etapa) {
    if (etapa.toUpperCase() === "SF") {
        return 'Semifinal'
    } else if (etapa.toUpperCase() === "DT") {
        return 'Decição do 3º lugar'
    } else if (etapa.toUpperCase() === "FI") {
        return 'Final'
    }
}

function totalIngresso (valor, tipo) {
    if (tipo.toUpperCase() === "DO") {
        return `R$ ${valor.toFixed(2)}`
    } else if (tipo.toUpperCase() === "IN") {
        return `U$ ${(valor / 4.1).toFixed(2)}`
    }
}

function valorTotal (quantidade, valor, tipo) {
    if (tipo.toUpperCase() === "DO") {
        const total = quantidade * valor
        return `R$ ${total.toFixed(2)}`
    } else if (tipo.toUpperCase() === "IN") {
        const total = quantidade * valor / 4.1
        return `$ ${total.toFixed(2)}`
    }
}

console.log("--Dados da compra--")
console.log(`Nome do cliente: ${nome}`)
console.log(`Tipo de jogo: ${tipoDoJogo(tipoDeJogo)}`)
console.log(`Etapa do jogo: ${etapaDoJogo(etapaDeJogo)}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingressos: ${quantidadeIngressos} ingressos`)
console.log(`--Valores--`)
console.log(`Valor do ingresso: R$ ${totalIngresso(valor, tipoDeJogo)}`)
console.log(`Valor total: ${valorTotal(quantidadeIngressos, valor, tipoDeJogo)}`)