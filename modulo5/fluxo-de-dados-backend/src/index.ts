import express from 'express'
import cors from 'cors'
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'
import { data } from './data'

const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => console.log('Server ON'))

const errors = {
    MISSING_PARAMETERS: {status: 422, message: 'Informações faltando. Consulte a documentação'},
    GAME_NOT_FOUND: {status: 404, message: 'Jogo não encontrado'},
    SOME_ERROR: {status: 500, message: 'Algo deu errado'}
}

app.get('/jogos', (req: Request, res: Response) => {

    res.status(200).send(data)

})

app.post('/jogos', (req: Request, res: Response) => {

    try {

        const { name, price } = req.body

        if (!name || !price) throw new Error(errors.MISSING_PARAMETERS.message)

        const newGame = {
            id: generateId(),
            name,
            price,
        }

        data.push(newGame)

        res.status(201).send(data)

    }

    catch (error: any) {

        switch (error.message) {

            case errors.MISSING_PARAMETERS.message:
                res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
                break

            case errors.GAME_NOT_FOUND.message:
                res.status(errors.GAME_NOT_FOUND.status).send(errors.GAME_NOT_FOUND.message)
                break

            default:
                res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }

    }
})

app.put('/jogos/:id', (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const { price } = req.body

        if (!price) throw new Error(errors.MISSING_PARAMETERS.message)

        const findId = data.find(game => game.id === id)

        if (!findId) throw new Error(errors.GAME_NOT_FOUND.message)

        for (let game of data) {

            if (game.id === id) {

                game.price = price

            }

        }

        res.status(200).send(data)

    }

    catch (error: any) {

        switch (error.message) {

            case errors.MISSING_PARAMETERS.message:
                res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
                break

            case errors.GAME_NOT_FOUND.message:
                res.status(errors.GAME_NOT_FOUND.status).send(errors.GAME_NOT_FOUND.message)
                break

            default:
                res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }

    }

})

app.delete('/jogos/:id', (req: Request, res: Response) => {

    try {

        const { id } = req.params

        const findId = data.find(game => game.id === id)

        if (!findId) throw new Error(errors.GAME_NOT_FOUND.message)

        const newData = data.filter(game => game.id !== id)

        res.status(201).send(newData)

    }

    catch (error: any) {

        switch (error.message) {

            case errors.MISSING_PARAMETERS.message:
                res.status(errors.MISSING_PARAMETERS.status).send(errors.MISSING_PARAMETERS.message)
                break

            case errors.GAME_NOT_FOUND.message:
                res.status(errors.GAME_NOT_FOUND.status).send(errors.GAME_NOT_FOUND.message)
                break

            default:
                res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }

    }

})