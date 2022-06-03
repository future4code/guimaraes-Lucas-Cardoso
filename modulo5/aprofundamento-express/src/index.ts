import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { data, DataType } from './data'
import { v4 as generateId } from 'uuid'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log('Server ON'))

app.get('/tarefas', (req: Request, res: Response) => {
    try {
        const status: boolean = (req.query.status === 'true')
    
        if (status === undefined) return res.status(200).send(data)
    
        const filteredData = data.filter(item => item.completed === status)
    
        res.status(200).send(filteredData)
    }
    catch (error: any) {
        res.status(400).end('Falha na requisisão')
    }
})

app.post('/tarefa/criar', (req: Request, res: Response) => {
    try {
        const { body } = req
        const userId = req.headers.authorization

        if (!userId) throw new Error('Faltando autorização')
        if (!body.hasOwnProperty('title') || !body.hasOwnProperty('completed')) throw new Error('Informações do body incorretas')
        if (typeof body.title !== 'string' || typeof body.completed !== 'boolean') throw new Error('Informações do body incorretas')

        const newTarefa: DataType = {
            userId: userId as string,
            id: generateId(),
            title: body.title,
            completed: body.completed,
        }

        data.push(newTarefa)

        res.status(201).send(data)
    }
    catch (error: any) {
        res.status(400).end(error.message)
    }
})

app.put('/tarefa/:tarefaId', (req: Request, res: Response) => {
    try {
        const { body } = req
        const { tarefaId } = req.params
        const userId = req.headers.authorization

        if (!userId) throw new Error('Faltando autorização')

        const user = data.find(item => item.userId === userId)
        if (!user) throw new Error('Usuário não encontrado')

        const tarefa = data.find(item => item.id === tarefaId)
        if (!tarefa) throw new Error('Tarefa não encontrada')

        if (tarefa.userId !== userId) throw new Error('Falha na autorização do usuário')

        if (!body.hasOwnProperty('completed')) throw new Error('Informações do body incorretas')
        if (typeof body.completed !== 'boolean') throw new Error('Informações do body incorretas')

        for (let item of data) {
            if (item.id === tarefaId) {
                item.completed = body.completed
            }
        }

        res.send(data)
    }
    catch (error: any) {
        res.status(400).end(error.message)
    }
})

app.delete('/tarefa/:tarefaId', (req: Request, res: Response) => {
    try {

    }
    catch (error: any) {
        res.status(400).end(error.message)
    }
})

app.get('/tarefas/:userId', (req: Request, res: Response) => {
    try {

    }
    catch (error: any) {
        res.status(400).end(error.message)
    }
})