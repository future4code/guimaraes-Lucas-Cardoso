export interface Client {
    name: string
    registrationNumber: number
    consumedEnergy: number
    calculateBill(): number
}

export abstract class Place {
    constructor(protected cep: string) {}

    public getCep(): string {
        return this.cep;
    }
}

export class Residence extends Place {
    constructor(
      protected residentsQuantity: number,
      cep: string
    ) {
      super(cep)
    }

    getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}

export class Commerce extends Place {
    constructor(
      protected floorsQuantity: number,
      cep: string
    ) {
      super(cep);
    }

    getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}

export class Industry extends Place {
    constructor(
      protected machinesQuantity: number,
      cep: string
    ) {
        super(cep);
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}