import connection from "./connection";
import app from "./app";
import { Request, Response} from 'express'

app.get('/actor/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        const result = await connection('Actor')
        .select('name')
        .where('id', id)

        res.send(result[0])
    }
    catch (e) {
        res.end('Erro')
    }
})


app.get('/actor', async (req: Request, res: Response) => {
    try {
        const { gender } = req.query

        if (!gender) {
            const result = await connection('Actor').select()

            return res.send(result[0])
        }

        const result = await connection('Actor')
        .select()
        .count('* as count')
        .where('gender', gender as string)

        res.send(result[0])
    }
    catch (e) {
        res.end('Erro')
    }
})

app.put('/actor', async (req: Request, res: Response) => {
    try {
        const { salary, id } = req.body

        await connection('Actor')
        .update({
            salary
        })
        .where('id', id)

        res.status(200).send('Atualizado com sucesso')
    }
    catch (e) {
        res.end('Erro')
    }
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        await connection('Actor')
        .delete()
        .where('id', id)

        res.status(200).send('Deletado com sucesso')
    }
    catch (e) {
        res.end('Erro')
    }
})