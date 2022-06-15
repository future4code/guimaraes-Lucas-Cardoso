import { v4 as generateId } from 'uuid'

type dataInfo = {
    id: string,
    name: string,
    price: number,
}

export const data: dataInfo[] = [
    {
        id: generateId(),
        name: 'The Witcher 3: Wild Hunt',
        price: 79.99
    },
    {
        id: generateId(),
        name: 'Monster Hunter: World',
        price: 69.99
    },
    {
        id: generateId(),
        name: 'ELDEN RING',
        price: 249.90
    },
    {
        id: generateId(),
        name: 'Middle-earth: Shadow of War',
        price: 119.99
    },
    {
        id: generateId(),
        name: 'Sekiro: Shadows Die Twice',
        price: 199.99
    }
]