import { User } from "../../../endpoints/User"
import { UserDatabaseMock } from "./UserDatabaseMock"

const userDatabaseMock = new UserDatabaseMock()
const userBusiness = new User(userDatabaseMock)

describe('Testando UserBusiness', () => {
    test('Caso de erro: usuário não encontrado', async () => {
        try {
            await userBusiness.getUserById('0')
        }

        catch (error) {
            expect(error.statusCode).toBe(404)
            expect(error.message).toBe('Invalid character')
        }
    })

    test('Caso de sucesso: usuário retornado', async () => {
        expect.assertions(1)
        try {
            const result = await userBusiness.getUserById('1')
            expect(result).toEqual({
                id: '1',
                name: 'Lucas Cardoso',
                email: 'lucas@email.com',
                password: '123456',
                role: 'NORMAL'
            })
        }
        catch (error) {
            console.log(error.message)
        }
    })
})