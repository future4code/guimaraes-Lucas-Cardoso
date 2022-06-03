import { v4 as generateId } from 'uuid'

export type DataType = {
    userId: string,
    id: string,
    title: string,
    completed: boolean,
}

export const data: DataType[] = [
    {
        userId: '1',
        id: generateId(),
        title: "Limpar o quarto",
        completed: false
    },
    {
        userId: '1',
        id: generateId(),
        title: "Lavar a louça",
        completed: true
    },
    {
        userId: '1',
        id: generateId(),
        title: "15 minutos de esteira",
        completed: false
    },
    {
        userId: '2',
        id: generateId(),
        title: "Comprar leite",
        completed: true
    },
    {
        userId: '2',
        id: generateId(),
        title: "Ler um livro",
        completed: true
    },
    {
        userId: '3',
        id: generateId(),
        title: "Finalizar a entrega",
        completed: false
    },
    {
        userId: '3',
        id: generateId(),
        title: "Dormir cedo",
        completed: false
    },
    {
        userId: '3',
        id: generateId(),
        title: "Tirar o pó dos móveis",
        completed: false
    },
    {
        userId: '4',
        id: generateId(),
        title: "Varrer os quartos",
        completed: true
    },
    {
        userId: '5',
        id: generateId(),
        title: "Tomar banho",
        completed: false
    },
]