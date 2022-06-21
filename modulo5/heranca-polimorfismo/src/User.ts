export default class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  interoduceYourself(): string {
    return `Olá, ${this.name} bom dia!`
 }

  constructor(
		id: string,
		email: string,
		name: string,
		password: string,
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
    // this.introduceYourself = introduceYourself
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
}