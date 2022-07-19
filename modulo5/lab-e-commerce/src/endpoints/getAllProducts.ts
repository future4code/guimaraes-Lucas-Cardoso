import { connection } from '../data/connection'
import { Request, Response } from 'express'

export async function getAllProducts (req: Request, res: Response) {

    try {
        let search = req.query.search as string
        let order = req.query.order as string

        if (!search) search = '%'
        
        if (order?.toUpperCase() !== 'ASC' && order?.toUpperCase() !== 'DESC') order = 'name'

        const result = await connection('labecommerce_products')
        .select()
        .where('name', 'like', `%${search}%`)
        .orderBy('price', order)

        if (result.length < 1) throw new Error('Nenhum resultado encontrado')
        
        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.message)
    }

}