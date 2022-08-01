export class User {
  constructor(
    private id: string,
    private first_name: string,
    private last_name: string,
    private participation: Number
  ) {}

  getId() {
    return this.id
  }
  getFirst_name() {
    return this.first_name
  }
  getLast_name() {
    return this.last_name
  }
  getParticipation() {
    return this.participation
  }
}