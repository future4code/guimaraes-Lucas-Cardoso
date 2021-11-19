// 1) a. 10 & 50
//    b. A mesma coisa, 10 & 50.

// 2) a. Procurar se existe e palavra "cenoura" na frase, ignorando a formatação.
//    b. true | true | false



    // Exercício 1

function sobreLucas () {
    return "Eu sou Lucas, tenho 18 anos, moro em Curitiba e sou estudante."
}

function sobreMim (nome, idade, cidade, profissao) {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`
}



    // Exercício 2

function soma (num1, num2) {
    return num1 + num2
}
console.log('2 + 2 =', soma(2, 2))

function isBigger (num1, num2) {
    return num1 >= num2
}
console.log('1 é maior que 2?', isBigger(1, 2))
console.log('5 é maior que -10?', isBigger(5, -10))

function isEven (num) {
    return num % 2 === 0
}
console.log('1 é par?', isEven(1))
console.log('16 é par?', isEven(16))

function stringLengthCaps (string) {
    return [string.length, string.toUpperCase()]
}



    // Exercício 3

function add (num1, num2) {
    return num1 + num2
}

function subtract (num1, num2) {
    return num1 - num2
}

function multiply (num1, num2) {
    return num1 * num2
}

function divide (num1, num2) {
    return num1 / num2
}

const numero1 = Number(prompt('Digite um número'))
const numero2 = Number(prompt('Digite outro número'))

console.log(`Números inseridos: ${numero1} e ${numero2}`)
console.log("Soma:", add(numero1, numero2))
console.log("Diferença:", subtract(numero1, numero2))
console.log("Multiplicação:", multiply(numero1, numero2))
console.log("Divisão:", divide(numero1, numero2))



    // Desafio 1

const print = (arg) => console.log(arg)

const somar = (num1, num2) => {
    const result = num1 + num2
    print(result)
}

somar(1, 2)



    // Desafio 2

const pitagoras = (cateto1, cateto2) => Math.sqrt(cateto1 * cateto1 + cateto2 * cateto2)

console.log('A hipotenusa dos catetos 21 e 28 é igual a', pitagoras(21, 28))