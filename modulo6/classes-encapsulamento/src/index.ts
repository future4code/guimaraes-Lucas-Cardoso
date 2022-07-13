// 1.   a) O construtor serve para executar ações ao criar um objeto com a classe. É chamado da seguinte forma:
//      const nomeObj = new nomeClasse()

//      b) Apenas uma vez

//      c) Por meio de metodos, uma função que retorna uma propriedade do objeto

class Transaction {
    private description: string
    private value: number
    private date: string

    constructor (
        description: string,
        value: number,
        date: string
    ) {
        this.description = description
        this.value = value
        this.date = date
    }

    getDescription = () => {
        console.log(this.description)
    }

    getValue = () => {
        console.log(this.value)
    }

    getDate = () => {
        console.log(this.date)
    }
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    getCpf = () => {
        console.log(this.cpf)
    }

    getName = () => {
        console.log(this.name)
    }

    getAge = () => {
        console.log(this.age)
    }

    getBalance = () => {
        console.log(this.balance)
    }

    getTransactions = () => {
        console.log(this.transactions)
    }

    addTransaction = (newTransaction: Transaction) => {
        this.transactions.push(newTransaction)
    }
}

class Bank {
    private accounts: UserAccount[]

    constructor (accounts: UserAccount[]) {
        this.accounts = accounts
    }

    getAccounts = () => {
        console.log(this.accounts)
    }
}

const lucas = new UserAccount('04564467962', 'Lucas Cardoso', 19)
const rtx3060 = new Transaction('Rtx 3060', 2890.90, '04/07/2022')

lucas.addTransaction(rtx3060)
lucas.getTransactions()