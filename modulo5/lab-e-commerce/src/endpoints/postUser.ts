import { connection } from '../data/connection';
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

export async function postUser (req: Request, res: Response): Promise<void> {

    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) throw new Error('Informações do body incorretas, checar documentação')

        if (typeof name !== 'string') throw new Error('O nome deve ser uma string')
        if (typeof email !== 'string') throw new Error('O e-mail deve ser uma string')
        if (typeof password !== 'string') throw new Error('A senha deve ser uma string')

        const result = await connection('labecommerce_users')
        .select()
        .where('email', email)
        
        if (result.length !== 0) throw new Error('Já existe uma conta com esse e-mail')

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