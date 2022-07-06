import { connection } from '../data/connection';
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

export async function postUser (req: Request, res: Response): Promise<void> {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) throw new Error('Informações do body incorretas, checar documentação')

        await connection('labecommerce_users')
        .insert({
            id: generateId(),
            name,
            email,
            password,
        })

        res.status(201).send('Usuário criado com sucesso')
    }

    catch (error: any) {
        res.status(400).send(error.message)
    }

}