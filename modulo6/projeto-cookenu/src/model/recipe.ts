export type recipe = {
    id: string
    title: string
    description: string
    authorId: string
}

export type recipeInput = {
    title: string
    description: string
    token: string
}

export type getRecipe = {
    id: string,
    token: string
}