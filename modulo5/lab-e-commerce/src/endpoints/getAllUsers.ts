import { connection } from "../data/connection";
import { Request, Response } from 'express'

export async function getAllUsers (req: Request, res: Response) {

    try {
        const result = await connection('labecommerce_users')
        .select()

        res.status(200).send(result)
    }

    catch (error: any) {
        res.status(400).send(error.message)
    }

}