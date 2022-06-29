import { v4 } from "uuid";

export class IdGenerate{
  public generateId(): string{
    return v4()
  }
}