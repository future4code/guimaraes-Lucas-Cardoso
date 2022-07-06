import connection from "./connection";

// a)   Ele retorna um array dentro de um array, como o primeiro array é o que nos interessa
//      usamos o "result[0]"

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    return result[0][0]
}



// b)

const searchActor = async (name: string) => {

    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = "${name}"
    `)

    return result[0]
}



// c)

const countActors = async (gender: string) => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `)

    return result[0][0].count
}