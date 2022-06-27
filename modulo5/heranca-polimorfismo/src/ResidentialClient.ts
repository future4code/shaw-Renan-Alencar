import { Client } from "./Client";
import { Residence } from "./Residence";

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: string,
    residentsQuantity: number,
    cep: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,

  ) {
    super(residentsQuantity, cep);
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }

  public getCpf(): string {
    return this.cpf;
  }
}