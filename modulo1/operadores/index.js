// a. false
// b. false
// c. true
// d. boolean

// Como ele não transformou a string em número
// ele vai simplesmente concatenar os números,
// não soma-los.

// let primeiroNumero = Number(prompt("Digite um número!"))
// let segundoNumero = Number(prompt("Digite outro número!"))

let yourAge = Number(prompt("Digite sua idade"))
let friendAge = Number(prompt("Digite a idade de seu melhor amigo(a)"))
console.log("Sua idade é maior que a do seu amigo?", yourAge > friendAge)
console.log(yourAge - friendAge)


let evenNum = Number(prompt("Digite um número par"))
console.log(evenNum % 2)
// O resto vai sempre ser 0 para os números par
// O resto vai sempre ser 1 para os números ímpares


let ageInYears = Number(prompt("Digite sua idade em anos"))
let ageInMonths = ageInYears * 12
let ageInDays = ageInMonths * 30
let ageInHours = ageInDays * 24
console.log("Você já viveu", ageInMonths, "mesês.")
console.log("Você já viveu aproximadamente", ageInDays, "dias.")
console.log("Você já viveu aproximadamente", ageInHours, "horas.")


let firstNum = Number(prompt("Digite um número"))
let secondNum = Number(prompt("Digite outro número"))
console.log("O primeiro número é maior que o segundo?", firstNum > secondNum)
console.log("O primeiro número é igual ao segundo?", firstNum === secondNum)
console.log("O primeiro número é divisível pelo segundo?", firstNum % secondNum === 0)
console.log("O segundo número é divisível pelo primeiro?", secondNum % firstNum === 0)