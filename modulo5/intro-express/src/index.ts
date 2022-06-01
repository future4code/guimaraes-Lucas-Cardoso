import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { users } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log('Server on')
})



// Exercício 1

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express')
})



// Exercício 4

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})



// Exercício 7

app.get('/posts', (req: Request, res: Response) => {
    const result = users.map(user => user.posts)

    res.status(200).send(result.flat(1))
})



// Exercício 8

app.get('/posts/:id/comments', (req: Request, res: Response) => {

    try {
        const { id } = req.params
        let posts: {}[] = []

        for (let user of users) {
            if (user.id === Number(id)) {
                posts = user.posts
            }
        }

        res.status(200).send(posts)
    }
    catch (err) {
        res.status(400).end('Id não encontrado')
    }
    
})