import { performPurchase } from "../src"
import { user } from "../src/model/user"

describe('Teste na função perform purchase', () => {
    it('Usuário com saldo maior que o valor de compra', () => {

        const user: user = {
            name: 'Jorge',
            balance: 500
        }

        const result = performPurchase(user, 400)

        expect(result).toEqual({
            name: 'Jorge',
            balance: 100
        })

    })

    it('Usuário com saldo igual ao valor de compra', () => {

        const user: user = {
            name: 'Cláudio',
            balance: 600
        }

        const result = performPurchase(user, 600)

        expect(result).toEqual({
            name: 'Cláudio',
            balance: 0
        })
    })

    it('Usuário com saldo menor ao valor de compra', () => {

        const user: user = {
            name: 'Geanmarco',
            balance: 100
        }

        const result = performPurchase(user, 300)

        expect(result).toBe(undefined)
    })
})