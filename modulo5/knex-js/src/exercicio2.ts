import connection from "./connection";

// a)

const updateActor = async (id: string, salary: number) => {
    await connection("Actor")
        .update({
            salary
        })
        .where("id", id)
}



// b)

const deleteActor = async (id: string) => {
    await connection("Actor")
        .delete()
        .where("id", id)
};



// c)

const avgSalary = async (gender: string) => {
    const result = await connection("Actor")
        .avg("salary as average")
        .where({ gender });
  
    return result[0].average
}