import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../model/user'

export class TokenGenerator {

    public generateToken = (payload: authenticationData) => {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            { expiresIn: '1h'}
        )

        return token
    }

    public tokenData = (token: string): authenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as authenticationData

        return payload
    }
}