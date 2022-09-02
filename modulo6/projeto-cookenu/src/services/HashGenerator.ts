import * as bcrypt from 'bcryptjs'

export class HashManager {

    public generateHash = async (pass: string): Promise<string> => {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        const result = await bcrypt.hash(pass, salt)
        return result
    }

    public compareHash = async (pass: string, hash: string): Promise<boolean> => {
        return await bcrypt.compare(pass, hash)
    }

}