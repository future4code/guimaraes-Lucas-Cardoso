/*  1. (10 & 10, 5)
    2. (10, 10, 10)
    3. horasPorDia & recebePorDia
*/

/* Exercício 1 */

let nome
let idade
console.log(typeof nome, typeof idade)
    // Como nenhum valor foi atribuido às variaveis elas simplesmente não possuem um tipo

nome = prompt("Qual seu nome?")
idade = prompt("Qual sua idade?")
console.log(typeof nome, typeof idade)
    // Em ambos os casos apareceu string, mesmo um deles sendo um número.

console.log("Olá", nome, "você tem", idade, "anos!")


/* Exercício 2 */

let pergunta1 = "Você gosta de séries?"
let pergunta2 = "Já assistiu algum episódio hoje?"
let pergunta3 = "Alguma vez chorou para uma série?"
let resposta1 = prompt(pergunta1)
let resposta2 = prompt(pergunta2)
let resposta3 = prompt(pergunta3)

console.log(pergunta1, "-", resposta1)
console.log(pergunta2, "-", resposta2)
console.log(pergunta3, "-", resposta3)


/* Exercício 3 */

let a = 10
let b = 25
let newA = b
let newB = a
console.log("O novo valor de 'a' é:", newA)
console.log("O novo valor de 'b' é:", newB)


/* Desafio */

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))
let somaNums = num1 + num2
let multiplyNums = num1 * num2

console.log("O primeiro número somado ao segundo número resulta em:", somaNums)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplyNums)