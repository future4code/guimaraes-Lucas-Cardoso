import { connection } from "../data/connection";
import { Request, Response } from 'express'

export async function getUserPurchases (req: Request, res: Response) {
    try {
        const { user_id } = req.params

        const result = await connection('labecommerce_purchases')
        .select()
        .where('user_id', user_id)

        res.status(200).send(result)
    }
    
    catch (error) {
        res.status(400).send(error)
    }
}