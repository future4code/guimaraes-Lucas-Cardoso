// 1. a) Matheus Nachtergaele
//       Virginia Cavendish
//       {canal: "Globo", horario: "14h"}

// 2. a) {nome: "Juca", idade: 3, raca: "SRD"}
//       {nome: "Juba", idade: 3, raca: "SRD"}
//       {nome: "Jubo", idade: 3, raca: "SRD"}
//    b) Os três pontos serve para reutilizar os dados já inseridos em outro objeto,
//      apenas acresentando ou modificando-os.

// 3. a) false
//       undefined
//    b) No segundo console.log ele tenta buscar uma propriedade chamada "altura"
//      que não existe na const "pessoa", portanto ele acaba retornando undefined.



// Exercícios

// 1.

const meusApelidos = {
    nome: "Lucas",
    apelidos: ["Lukinhas", "Padoca", "Pão"],
}

function apresentacao (obj) {
    return `Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}.`
}

const novosApelidos = {...meusApelidos, apelidos: ["Pacote de osso seco", "Lombriga anêmica", "Lombriga esticada"]}

console.log(apresentacao(meusApelidos))
console.log(apresentacao(novosApelidos))



// 2.

const pessoa1 = {
    nome: "Ramon Valdez",
    idade: 25,
    profissao: "Pintor",
}

const pessoa2 = {
    nome: "Vito Giuseppe",
    idade: 29,
    profissao: "Jogador profissional de Counter Strike"
}

function transformInArray (obj) {
    return [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
}

console.log(transformInArray(pessoa1))
console.log(transformInArray(pessoa2))



// 3.

let carrinho = []

const fruta1 = {
    nome: "Maçã",
    disponibilidade: true,
}

const fruta2 = {
    nome: "Banana",
    disponibilidade: true,
}

const fruta3 = {
    nome: "Morango",
    disponibilidade: true,
}

function addToCart (obj) {
    return carrinho.push(obj)
}

addToCart(fruta1)
addToCart(fruta2)
addToCart(fruta3)

console.log(carrinho)