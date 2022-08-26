import { CustomError } from "./CustomError";

export class IdNotFound extends CustomError {
    constructor () {
        super('Requisição inválida, ID não encontrado', 404)
    }
}