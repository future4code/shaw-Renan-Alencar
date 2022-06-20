import Transaction from "./transaction"


 export default class UserAccount {
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
     this.transactions = []
  }

  public getAccount = () => {
    return {
      cpf: this.cpf,
      name: this.name,
      age: this.age,
    }
  }

  public setAge = (newAge: number) => {
    this.age = newAge
  }

  public addTransactions = (transaction: Transaction) => {
    this.transactions.push(transaction)
  }

  public getTransactions = () => {
    return this.transactions;
  }
}

const usuario = new UserAccount("56564", "renan", 33)

const transacao = new Transaction("20/06/2022", 100, "pagamento de divida")

usuario.addTransactions(transacao)




