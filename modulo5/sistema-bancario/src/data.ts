import { v4 as generateId } from 'uuid'

export type Usuario = {
    id: string,
    nome: string,
    cpf: string,
    nascimento: string,
    saldo: number,
    extrato: Extrato[]
}

export type Extrato = {
    valor: number,
    data: string,
    descricao: string
}

export const users = [
    {
        id: generateId(),
        nome: 'Lucas Cardoso',
        cpf: '06561467965',
        nascimento: '08/03/2003',
        saldo: 407.48,
        extrato: [
            {
                valor: 23.90,
                data: '17/06/2022',
                descricao: 'Mc Donalds'
            },
            {
                valor: 2199.90,
                data: '17/06/2022',
                descricao: 'RTX 2060'
            },
        ]
    },
    {
        id: generateId(),
        nome: 'Luiza Lima',
        cpf: '06561467966',
        nascimento: '13/06/2003',
        saldo: 0,
        extrato: []
    }
]