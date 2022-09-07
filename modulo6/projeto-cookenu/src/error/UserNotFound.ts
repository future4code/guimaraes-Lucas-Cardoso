import { CustomError } from "./CustomError";

export class UserNotFound extends CustomError {
    constructor() {
        super ('Usuário não encontrado', 404)
    }
}