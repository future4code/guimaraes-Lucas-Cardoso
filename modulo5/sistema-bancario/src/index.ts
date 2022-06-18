import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid'
import { users, Usuario, Extrato } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log('Server ON'))

app.get('/users', (req: Request, res: Response) => {

    res.status(200).send(users)

})

app.get('/users/:id', (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const searchId = users.find(user => user.id === id)

        if (!searchId) throw new Error('ID não encontrado')

        res.status(200).send(searchId)

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.get('/users/saldo/:cpf', (req: Request, res: Response) => {

    try {
    
        const { cpf } = req.params

        const findCpf = users.find(user => user.cpf === cpf)

        if (!findCpf) throw new Error('CPF não encontrado')

        res.status(200).json(findCpf.saldo)

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.post('/users', (req: Request, res: Response) => {

    try {

        const { nome, cpf, nascimento } = req.body

        if (!nome || !cpf || !nascimento) throw new Error('Informações do body faltando, checar documentação')

        if (typeof nome !== 'string') throw new Error('O nome deve ser uma string')
        if (typeof cpf !== 'string') throw new Error('O CPF deve ser uma string')
        if (typeof nascimento !== 'string') throw new Error('O CPF deve ser uma string')
        
        if (cpf.length !== 11) throw new Error('CPF inválido')
        const findCpf = users.find(user => user.cpf === cpf)
        if (findCpf) throw new Error('CPF já cadastrado')

        if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(nascimento)) throw new Error('Data no formato inválido, deve ser dd/mm/yyyy')
        const yearBirth = Number(nascimento.slice(-4))
        const actualYear = new Date().getFullYear()

        if (actualYear - yearBirth < 18) throw new Error('O usuário deve ter 18 anos ou mais')

        const newUser: Usuario = {
            id: generateId(),
            nome,
            cpf,
            nascimento,
            saldo: 0,
            extrato: []
        }

        users.push(newUser)

        res.status(201).send(users)

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})