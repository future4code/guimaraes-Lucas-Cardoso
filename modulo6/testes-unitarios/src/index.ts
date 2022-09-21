import { Character } from "./model/character";

export const validateCharacter = (input: Character): boolean => {
    const { name, hp, defense, strength } = input

    if (!name || !hp || !defense || !strength) return false
    if (hp <= 0 || defense <= 0 || strength <= 0) return false

    return true
}

export const performAttackk = (attacker: Character, defender: Character): void => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error('Invalid character')
    }

    if (attacker.strength > defender.defense) {
        defender.hp -= attacker.strength - defender.defense;
    }
}

export const performAttack = (attacker: Character, defender: Character, validateCharacter: (input: Character) => boolean): void => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error('Invalid character')
    }

    if (attacker.strength > defender.defense) {
        defender.hp -= attacker.strength - defender.defense;
    }
}