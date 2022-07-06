import { connection } from "../data/connection";
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

export async function postPurchase (req: Request, res: Response) {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) throw new Error('Informações do body incorretas, checar documentação')

        const price = await connection('labecommerce_products')
        .where('id', product_id)
        .pluck('price')

        await connection('labecommerce_purchases')
        .insert({
            id: generateId(),
            user_id,
            product_id,
            quantity,
            total_price: price[0] * quantity
        })

        res.status(201).send('Compra realizada com sucesso')
    }

    catch (error) {
        res.status(400).send('Informações do body incorretas, checar documentação')
    }
}