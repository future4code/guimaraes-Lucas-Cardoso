import connection from "./connection"
import app from "./app"
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

app.get('/user/:id', async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const result = await connection('TodoListUser')
        .select('id', 'nickname')
        .where('id', id)

        if (result.length === 0) throw new Error('ID não encontrado')

        res.status(200).send(result[0])

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.get('/task/:id', async (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const result = await connection('TodoListTask')
        .select()
        .where('id', id)

        if (result.length === 0) throw new Error('Usuário não encontrado')

        res.status(200).send(result[0])

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})

app.post('/user', async (req: Request, res: Response) => {

    try {

        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) throw new Error('Informações incorretas no body, checar documentação')

        await connection('TodoListUser')
        .insert({
            id: generateId(),
            name,
            nickname,
            email
        })

        res.status(201).send('Usuário registrado com sucesso')

    }

    catch (error: any) {

        res.end(error.message)

    }
})

app.post('/task', async (req: Request, res: Response) => {

    try {

        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId) throw new Error('Informações incorretas no body, checar documentação')
        if (!/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(limitDate)) throw new Error('Data no formato inválido, deve ser dd/mm/yyyy')
        
        const findId = await connection('TodoListUser')
        .select()
        .where('id', creatorUserId)

        if (findId.length === 0) throw new Error('Usuário não encontrado')

        const date = `${limitDate.slice(-4)}-${limitDate.slice(3, -5)}-${limitDate.slice(0, -8)}`

        await connection('TodoListTask')
        .insert({
            id: generateId(),
            title,
            description,
            limit_date: date,
            creator_user_id: creatorUserId
        })

        res.status(201).send('Tarefa criada com sucesso')

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }
})

app.put('/user/edit/:id', async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const { name, nickname } = req.body

        if (!name || !nickname) throw new Error('Informações incorretas no body, checar documentação')

        const findId = await connection('TodoListUser')
        .select()
        .where('id', id)

        if (findId.length === 0) throw new Error('Usuário não encontrado')

        await connection('TodoListUser')
        .update({
            name,
            nickname
        })
        .where('id', id)

        res.status(202).send('Informações atualizadas com sucesso')

    }

    catch (error: any) {

        res.status(400).end(error.message)

    }

})