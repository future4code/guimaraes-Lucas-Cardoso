import { Client, Place, Residence, Commerce, Industry } from "./polimorfismo";

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name 
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const user1 = new User('1', 'lucas@email.com', 'Lucas Cardoso', '123456')

console.log(user1.getId())
console.log(user1.getEmail())
console.log(user1.getName())

// Exercício 1
// a) Não, pois ela é private e não possui nenhum metodo o retornando como os outros atributos.
// b) A quantidade de users criada, nesse caso apenas uma vez.



class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
}

const customer1 = new Customer('2', 'ana@email.com', 'Ana Preste', '123456', '12873613636')

// Exercício 2
// a) Apenas uma vez.
// b) Apenas uma vez, pois como a classe herda a classe 'user' quando ela é construída ela também chama
// este console.log uma vez



console.log(customer1.getId())
console.log(customer1.getName())
console.log(customer1.getEmail())
console.log(customer1.getCreditCard())
console.log(customer1.purchaseTotal)

// Exercício 3
// a) Não, pois o 'password' é settado como privado e classes filhas não podem acessar atributos privados,
// apenas publicos ou protected



// Exercício 4
console.log(customer1.introduceYourself())


/////////////////////////////////////////

const client: Client = {
    name: "Jorge Amanco",
    registrationNumber: 98742541,
    consumedEnergy: 3200,
    calculateBill: () => {
      return 2;
    }
  }

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())

// Exercício 1
// a) Todas.



// Exercício 2
// a) Não é possível criar uma instância de uma classe abstrata
// b) Criando uma outra classe não abstrata que herda a classe Place



// Exercício 3
const newResidence = new Residence(3, '82840160')
const newCommerce = new Commerce(2, '92453140')
const newIndustry = new Industry(8, '98754123')

console.log(newResidence.getCep(), newResidence.getResidentsQuantity())
console.log(newCommerce.getCep(), newCommerce.getFloorsQuantity())
console.log(newIndustry.getCep(), newIndustry.getMachinesQuantity())



// Exercício 4
class ResidentClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }
    
    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
    
    public getCpf(): string {
        return this.cpf
    }
}

const newResident = new ResidentClient('Claudio Osvaldo', 1, 320, '06561469705', 3, '82840480')


// Exercício 5
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

// a) Possui nome, um numero de registro, a quantidade total de consumo de energia,
// cep e um calculador do total da conta

// b) Ela possui CPNJ ao invés de CPF, um atributo de quantidade de pisos ao invés de
// residentes totais e possui um desconto na conta.



// Exercício 6
class IndustrialClient extends Industry implements Client {
    constructor (
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryRegistration: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getCnpj(): string {
        return this.industryRegistration
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }
}

// a) Da classe Industry, principalmente porque precisamos da quantidade de máquinas
// para adicionarmos no total da conta

// b) A do Client, porque ela precisa ter as propriedades de cliente.