import { performAttack, validateCharacter } from "../src"
import { Character } from "../src/model/character"

describe('Testando validateCharacter', () => {
    test('Criação de personagem com nome ""', () => {
        const input: Character = {
            name: '',
            hp: 1500,
            defense: 100,
            strength: 150
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    test('Criação de personagem com o HP igual a zero', () => {
        const input: Character = {
            name: 'Geralt',
            hp: 0,
            defense: 100,
            strength: 150
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    test('Criação de personagem com força igual a zero', () => {
        const input: Character = {
            name: 'Geralt',
            hp: 1500,
            defense: 100,
            strength: 0
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    test('Criação de personagem com defesa igual a zero', () => {
        const input: Character = {
            name: 'Geralt',
            hp: 1500,
            defense: 0,
            strength: 150
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    test('Criação de personagem com valor negativo', () => {
        const input: Character = {
            name: 'Geralt',
            hp: -1500,
            defense: 100,
            strength: 150
        }

        const output = validateCharacter(input)

        expect(output).toBe(false)
    })

    test('Criação de personagem com força igual a zero', () => {
        const input: Character = {
            name: 'Geralt',
            hp: 1500,
            defense: 100,
            strength: 150
        }

        const output = validateCharacter(input)

        expect(output).toBe(true)
    })
})

describe('Testando performAttack', () => {
    test('Ataque realizado com sucesso', () => {
        expect.assertions(5)

        const mock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: 'Geralt',
            hp: 1500,
            defense: 50,
            strength: 300
        }

        const defender: Character = {
            name: 'Eredin',
            hp: 1500,
            defense: 100,
            strength: 400
        }

        try {

            performAttack(attacker, defender, mock as any)

            expect(defender.hp).toBe(1300);
            expect(attacker.hp).toBe(1500);
            expect(mock).toBeCalled();
            expect(mock).toBeCalledTimes(2);
            expect(mock).toReturnTimes(2);
        }

        catch (error) {

        }
    })

    test('Personagem inválido', () => {
        expect.assertions(4)

        const mock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: 'Geralt',
            hp: 0,
            defense: 50,
            strength: 300
        }

        const defender: Character = {
            name: 'Eredin',
            hp: 1500,
            defense: 100,
            strength: 400
        }

        try {
            performAttack(attacker, defender, mock as any)
        }

        catch (error) {
            expect(error.message).toBe('Invalid character')
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledTimes(1);
            expect(mock).toHaveReturnedTimes(1);
        }
    })
})