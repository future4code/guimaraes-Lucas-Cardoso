// Exercício 2

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
    posts: Post[],
}



// Exercício 5

type Post = {
    id: number,
    title: string,
    body: string,
    userId: number,
}



// Exercício 6

// Dentro, já que o post é diretamente relacionado com o usuário é apropriado deixa-lo como uma propriedade do usuário




// Exercício 3

export const users: User[] = [
    {
        id: 1,
        name: 'Lucas Cardoso',
        phone: 999523933,
        email: 'lucascardoso@gmail.com',
        website: 'http://localhost:3000',
        posts: [
            {
                id: 1,
                title: 'Verso',
                body: 'Perder no LoL é vencer na vida.',
                userId: 1,
            },
            {
                id: 2,
                title: 'CS',
                body: 'Damage Taken from "pEle" - 74 in 2 hits',
                userId: 1,
            },
        ]
    },
    {
        id: 2,
        name: 'Geanmarco Reis',
        phone: 999652234,
        email: 'geanmarco@gmail.com',
        website: 'http://comoficarpobreapostando.com',
        posts: [
            {
                id: 3,
                title: 'CONFIA',
                body: 'Joga no empate do coxa e na vitória do furacão',
                userId: 2,
            },
            {
                id: 4,
                title: 'HJ TEM?',
                body: '@PADARIATEAM 4/5',
                userId: 2,
            },
        ]
    },
    {
        id: 3,
        name: 'Matheus Morita',
        phone: 940028922,
        email: 'lucascardoso@gmail.com',
        website: 'http://curiosidadessuperespecificashistoricas.com',
        posts: [
            {
                id: 5,
                title: 'Curiosidade do dia',
                body: 'O tank mais produzido da história foi o soviético T-54/T-55, com 100,000 unidades produzidas aproximadamente.Entrou em serviço em 1949 e está presente até hoje em guerras no Oriente Médio, África e Ásia. Outra curiosidade é que algumas variantes dele possuem uma blindagem especial feita para proteger a tripulação de altos níveis de radiação proveniente de bombas nucleares.',
                userId: 3,
            },
        ]
    },
    {
        id: 4,
        name: 'Dylan de Souza',
        phone: 999696969,
        email: 'dylanmedeiros@gmail.com',
        website: 'http://cronicaspadaria.com',
        posts: [
            {
                id: 6,
                title: 'Depth',
                body: 'Bó Depth',
                userId: 4,
            },
            {
                id: 7,
                title: 'Escolha de jogos',
                body: 'ow, 6 vão jogar DST hj ou vão ir direto no CS?',
                userId: 4,
            },
        ]
    },
    {
        id: 5,
        name: 'Gabriel Augusto',
        phone: 999254487,
        email: 'zykgod@gmail.com',
        website: 'http://mekikaramdoonibus.com',
        posts: [
            {
                id: 8,
                title: 'Depth',
                body: 'O que a vida tira, Deus da em dobro',
                userId: 5,
            },
        ]
    },
    {
        id: 6,
        name: 'Kevin Panda',
        phone: 999124458,
        email: 'kevinmama@gmail.com',
        website: 'http://receitascombanana.com',
        posts: [
            {
                id: 9,
                title: 'Medições diferenciadas',
                body: 'Eu acho que tenho mais que 1,90 pq minha geladeira mede 1,80 e eu sou maior que a geladeira',
                userId: 6,
            },
        ]
    },
    {
        id: 7,
        name: 'Gabriely Martins',
        phone: 999523933,
        email: 'gabimartins@gmail.com',
        website: 'http://importanciadobanho.com',
        posts: [
            {
                id: 10,
                title: 'Kinder Wovo',
                body: 'Amedon... amendo... amedo... amendronta... amedontrador... a-me-don-tra... a-me-dron-ta-dor',
                userId: 7,
            },
        ]
    },
    {
        id: 8,
        name: 'Donavan Donni',
        phone: 999666231,
        email: 'donodavan@gmail.com',
        website: 'http://churrasafetouogremio.com',
        posts: []
    },
]