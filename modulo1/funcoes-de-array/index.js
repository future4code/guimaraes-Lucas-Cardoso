// 1. a) { nome: "Amanda Rangel", apelido: "Mandi" } 0 [
//          { nome: "Amanda Rangel", apelido: "Mandi" },
//          { nome: "Laís Petra", apelido: "Laura" },
//          { nome: "Letícia Chijo", apelido: "Chijo" }
//       ]
//
//       { nome: "Laís Petra", apelido: "Laura" } 1 [
//          { nome: "Amanda Rangel", apelido: "Mandi" },
//          { nome: "Laís Petra", apelido: "Laura" },
//          { nome: "Letícia Chijo", apelido: "Chijo" }
//       ]
//
//       { nome: "Letícia Chijo", apelido: "Chijo" } 2 [
//          { nome: "Amanda Rangel", apelido: "Mandi" },
//          { nome: "Laís Petra", apelido: "Laura" },
//          { nome: "Letícia Chijo", apelido: "Chijo" }
//       ]

// 2. a) ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// 3. a) [{nome: 'Amanda Rangel', apelido: 'Mandi'}, {nome: 'Laís Petra', apelido: 'Laura'}]



// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]
const petsName = pets.map((item) => item.nome)
const salsichaOnly = pets.filter((item) => item.raca.toLowerCase() === "salsicha")
const poodleDiscount = pets.filter((item) => item.raca.toLowerCase() === "poodle").map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(petsName)
console.log(salsichaOnly)
console.log(poodleDiscount)



// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
const productsNames = produtos.map((item) => item.nome)
const productsDiscount = produtos.map((item) => {
    return {nome: item.nome, preco: (item.preco - item.preco * 5 / 100).toFixed(2) }
})
const productsBeverage = produtos.filter((item) => item.categoria.toLowerCase() === "bebidas")
const containYpe = produtos.filter((item) => item.nome.includes("Ypê"))
const containYpeWithMessage = produtos.filter((item) => item.nome.includes("Ypê")).map((item) => {
    return `Compre ${item.nome} por R$${item.preco.toFixed(2)}`
})

console.log(productsNames)
console.log(productsDiscount)
console.log(productsBeverage)
console.log(containYpe)
console.log(containYpeWithMessage)