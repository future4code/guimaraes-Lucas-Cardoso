// Com o comando process.argv[posição], sempre lembrando q a posição 0 e 1 estão sempre reservadas para node e o ./index.js

const name = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${name}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`)