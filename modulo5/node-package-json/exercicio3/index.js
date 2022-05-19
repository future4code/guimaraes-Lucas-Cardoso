const params = process.argv

const tarefa = [
    "Lavar a louça",
    "Comprar leite",
    "Tomar uma mate"
]

for (let i = 2; i < params.length; i++) {
    tarefa.push(params[i])
}

console.table(tarefa)