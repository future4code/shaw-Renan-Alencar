import * as bcrypt from "bcryptjs";

export class GenerateHash {
  public hash = async (password: string) => {
    const rounds = Number("12");
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(password, salt);
    return result;
  };

  public compare = async (password: string, hash: string) => {
    const result = await bcrypt.compare(password, hash)
    return result;
  };
}