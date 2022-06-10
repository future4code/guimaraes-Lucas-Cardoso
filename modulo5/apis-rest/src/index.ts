import express from 'express'
import { Request, Response } from 'express'
import cors from 'cors'
import { v4 as generateId } from 'uuid'
import { users, UserType } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log('Server ON'))

app.get('/users', (req: Request, res: Response) => {

    try {

        const { nome } = req.query

        if (!nome) return res.status(200).send(users)
        
        const searchName = users.find(user => user.name.toLowerCase() === String(nome).toLowerCase())

        if (!searchName) throw new Error('Usuário não encontrado')

        res.status(200).send(searchName)

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.get('/users/:type', (req: Request, res: Response) => {

    try {

        const { type } = req.params

        if (type !== UserType.ADMIN && type !== UserType.NORMAL) throw new Error('Inserir tipo de usuário válido: "NORMAL" ou "ADMIN"')

        const filteredUsers = users.filter(user => user.type === type)

        res.status(200).send(filteredUsers)

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.post('/users', (req: Request, res: Response) => {

    try {

        const { name, email, type, age } = req.body

        if (!name || !email || !type || !age) throw new Error('Informações do body incorretas, favor consultar documentação')

        if (typeof name !== 'string') throw new Error('O nome deve ser uma string')
        if (typeof email !== 'string') throw new Error('O e-mail deve ser uma string')
        if (typeof age !== 'number') throw new Error('A idade deve ser um número')
        if (type !== UserType.ADMIN && type !== UserType.NORMAL) throw new Error('O tipo deve ser "NORMAL" ou "ADMIN"')

        const newUser = {
            id: generateId(),
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send(users)

    }

    catch (error: any) {

        res.status(400).send(error.message)

    }

})