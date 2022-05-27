// Exercício 1

// a.
// const minhaString:string = 2
// O código quebra, nem se quer roda, pois o typescript não aceita numbers em
// variáveis declaradas string

// b.
const meuNumero: number | string = 8

// c.
enum Cores {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1: Pessoa = {
    nome: "Lucas Cardoso",
    idade: 19,
    corFavorita: Cores.VERDE
}

const pessoa2: Pessoa = {
    nome: "Geanmarco Reis",
    idade: 19,
    corFavorita: Cores.VERMELHO
}

const pessoa3: Pessoa = {
    nome: "Gabriel Viana",
    idade: 19,
    corFavorita: Cores.VIOLETA
}


// EXERCÍCIO 2

// a. Recebe um array de números e retorna um objeto

function obterEstatisticas (numeros: number[]): {} {
    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b)

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type statType = {
        maior: number,
        menor: number,
        media: number
    }

    const estatisticas: statType = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 2, 3, 4, 5]))

// c.
type amostra = {
    numeros: number[],
    obterEstatisticas: () => {},
}


// Exercício 3

type post = {
    autor: string,
    texto: string
}

let posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

// b. Recebe um array de objetos e retorna um array de objetos filtrado
function buscarPostsPorAutor (posts: post[], autorInformado: string): {}[] {
    return posts.filter((post) => post.autor.toLowerCase() === autorInformado.toLowerCase())
}

console.log(buscarPostsPorAutor(posts, 'lord voldemort'))