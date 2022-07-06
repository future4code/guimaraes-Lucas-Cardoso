import { connection } from '../data/connection';
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

export async function postProduct (req: Request, res: Response) {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) throw new Error('Informações do body incorretas, checar documentação')

        await connection('labecommerce_products')
        .insert({
            id: generateId(),
            name,
            price,
            image_url
        })

        res.status(201).send('Produto cadastrado com sucesso')
    }

    catch (error: any) {
        res.status(400).send(error.message)
    }
}