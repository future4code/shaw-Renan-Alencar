import { Character } from "../src/model/Character";
import { performAttack, performAttackValidator } from "../src/performAttack";

describe("testar perfomAttack", () => {
  test("Faça um teste com dois personagens com valores válidos, em que o defensor perca 200 pontos de vida.", () => {

    const attacker: Character = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      force: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      force: 800,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    performAttackValidator(attacker, defender, validatorMock);

    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  })

  test("Faça um teste com um dos personagens com alguma informação inválida. Verifique a mensagem de erro.", () => {

    const attacker: Character = {
      name: "",
      life: 1500,
      defense: 200,
      force: 600,
    };

    const defender: Character = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      force: 800,
    };

    const validatorMock = jest.fn(() => {
      return true;
    });

    try {
      performAttackValidator(attacker, defender, validatorMock);
      
    } catch (err:any) {
      expect(err.message).toBe("Invalid character");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
      
    }
  })
})
