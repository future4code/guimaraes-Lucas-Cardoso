export class CustomError extends Error {
    constructor(statusCode: number, message: string){
        super(message)
    }
}

export class InvalidName extends CustomError{ 
    constructor(){
        super(400, "Nome inválido")
    }
}

export class InvalidEmail extends CustomError{ 
    constructor(){
        super(400, "Email inválido")
    }
}

export class InvalidPassword extends CustomError{ 
    constructor(){
        super(400, "Senha inválida, necessário 6 caractares ou mais")
    }
}

export class UserNotFound extends CustomError {
    constructor() {
        super(400, "Usuário não encontrado")
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super(400, "Usuário não autorizado, faça login novamente")
    }
}