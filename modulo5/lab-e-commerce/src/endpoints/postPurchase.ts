import { connection } from "../data/connection";
import { Request, Response } from 'express'
import { v4 as generateId } from 'uuid'

export async function postPurchase (req: Request, res: Response) {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) throw new Error('Informações do body incorretas, checar documentação')

        if (typeof user_id !== 'string') throw new Error('O ID do usuário deve ser uma string')
        if (typeof product_id !== 'string') throw new Error('O ID do produto deve ser uma string')
        if (typeof quantity !== 'number') throw new Error('A quantidade deve ser um número')

        const findUserId = await connection('labecommerce_users')
        .select()
        .where('id', user_id)

        if (findUserId.length === 0) throw new Error('Usuário não encontrado')

        const findProductId = await connection('labecommerce_products')
        .select()
        .where('id', product_id)

        if (findProductId.length === 0) throw new Error('Produto não encontrado')

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

    catch (error: any) {
        res.status(400).send(error.message)
    }
}