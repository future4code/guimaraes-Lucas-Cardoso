import { TaskDatabase } from "../data/TaskDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { TaskInputDTO } from "../model/taskDTO";
import { generateId } from "../services/genderateId";

export class TaskBusiness {
  public createTask = async (input: TaskInputDTO) => {
    try {
      const { title, description, deadline, authorId } = input;

      if (!title || !description || !deadline || !authorId) {
        throw new InvalidRequest();
      }

      const id: string = generateId()

      const taskDatabase = new TaskDatabase();
      await taskDatabase.insertTask({
        id,
        title,
        description,
        deadline,
        authorId,
      });
    } catch (error: any) {
      throw new CustomError(error.message || error.sqlMessage, error.statusCode);
    }
  };
}
