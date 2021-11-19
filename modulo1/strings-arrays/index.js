// 1)  a. undefined
//     b. null
//     c. 11
//     d. 3
//     e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//     f. 9

// 2)  SUBI NUM ÔNIBUS EM MIRROCOS 27

const username = prompt("Digite seu nome de usuário")
const email = prompt("Digite seu e-mail")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vindo(o), ${username}!`)



let comidasFavoritas = ["Arroz", "Feijão", "Batata-frita", "Frango", "Carne"]
console.log(`Essas são minhas comidas favoritas:`)
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])
const comidaFavoritaUser = prompt("Digite sua comida favorita")
comidasFavoritas[1] = comidaFavoritaUser
console.log(comidasFavoritas)



let listaDeTarefas = []
let tarefa1 = prompt("Digite uma tarefa que precisa realizar hoje")
let tarefa2 = prompt("Digite outra tarefa que precisa realizar hoje")
let tarefa3 = prompt("Digite outra tarefa que precisa realizar hoje")
listaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(listaDeTarefas)
let indicie = prompt("Digite o indicie de uma tarefa que já finalizou")
listaDeTarefas.splice(indicie, 1)
console.log(listaDeTarefas)



let frase = prompt("Digite uma frase")
console.log(frase.split(" "))



let array = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let index = array.indexOf("Abacaxi")
console.log(index, array.length)