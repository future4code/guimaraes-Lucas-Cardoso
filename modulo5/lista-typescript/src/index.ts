// Exercício 1

function greetings (name: string, birthDate: string): string {
    const date: string[] = birthDate.split('/')

    return `Olá me chamo ${name}, nasci no dia ${date[0]} do mês ${date[1]} do ano de ${date[2]}`
}

console.log(greetings('Lucas', '08/03/2003'))



// Exercício 2

function getType (param: any): void {
    console.log(typeof param)
}

getType('15')



// Exercício 3

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

function getFilmType (name: string, releaseDate: number, genre: GENERO, rating?: number): {} {
    type MovieType = {
        nome: string,
        anoLancamento: number,
        genero: string,
        pontuacao?: number
    }

    const movieInfo: MovieType = {
        nome: name,
        anoLancamento: releaseDate,
        genero: genre,
        pontuacao: rating
    }

    return movieInfo
}

console.log(getFilmType('Duna', 2021, GENERO.ACAO, 74))



// Exercício 4

enum Setor {
    MARKETING = 'marketing',
    FINANCEIRO = 'financeiro',
    VENDAS = 'vendas'
}

type Person = {
    nome: string,
    salario: number,
    setor: Setor,
    presencial: boolean
}

function getMarketingPresencial (array: Person[]): {} {
    return array.filter(item => item.setor === 'marketing' && item.presencial)
}

console.log(getMarketingPresencial(
    [
        { nome: "Marcos", salario: 2500, setor: Setor.MARKETING, presencial: true },
        { nome: "Maria" ,salario: 1500, setor: Setor.VENDAS, presencial: false},
        { nome: "Salete" ,salario: 2200, setor: Setor.FINANCEIRO, presencial: true},
        { nome: "João" ,salario: 2800, setor: Setor.MARKETING, presencial: false},
        { nome: "Josué" ,salario: 5500, setor: Setor.FINANCEIRO, presencial: true},
        { nome: "Natalia" ,salario: 4700, setor: Setor.VENDAS, presencial: true},
        { nome: "Paola" ,salario: 3500, setor: Setor.MARKETING, presencial: true }
    ]
))



// Exercício 5

enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

type User = {
    name: string,
    email: string,
    role: Role
}

function getAdminEmail (array: User[]) {
    let output: string[] = []

    array.map(item => {
        if (item.role === 'admin') {
            output.push(item.email)
        }
    })

    return output
}

console.log(getAdminEmail(
    [
        {name: "Rogério", email: "roger@email.com", role: Role.USER},
        {name: "Ademir", email: "ademir@email.com", role: Role.ADMIN},
        {name: "Aline", email: "aline@email.com", role: Role.USER},
        {name: "Jéssica", email: "jessica@email.com", role: Role.USER},  
        {name: "Adilson", email: "adilson@email.com", role: Role.USER},  
        {name: "Carina", email: "carina@email.com", role: Role.ADMIN}      
    ]
))



// Exercício 6

type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function getSerasa (array: Cliente[]) {
    array.forEach(item => {
        return item.saldoTotal = item.saldoTotal - item.debitos.reduce((a, b) => a + b, 0)
    })
    
    return array.filter(item => item.saldoTotal < 0)
}

console.log(getSerasa(
    [
        { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
        { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
        { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
        { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
        { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
        { cliente: "Soter", saldoTotal: 1200, debitos: [] }
    ]
))