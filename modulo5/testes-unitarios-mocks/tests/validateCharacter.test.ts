import { validateCharacter } from "../src/validateCharacter"

describe("testar validateCharacter", () => {
  // A 
  test("verifique o comportamento da função com um personagem com o nome vazio", () => {
    const emptyNameProperty = {
      name: "",
      life: 1500,
      defense: 10,
      force: 15,
    };

    const result = validateCharacter(emptyNameProperty);
    expect(result).toBe(false);
  });

  // B 
  test("verifique o comportamento da função com um personagem com a vida igual a zero.", () => {
    const lifeIsZero = {
      name: "Macho",
      life: 0,
      defense: 10,
      force: 15,
    };

    const result = validateCharacter(lifeIsZero);
    expect(result).toBe(false);
  });

  // C 
  test("verifique o comportamento da função com um personagem com a força igual a zero.", () => {
    const forceIsZero = {
      name: "Macho",
      life: 1500,
      defense: 10,
      force: 0,
    };

    const result = validateCharacter(forceIsZero);
    expect(result).toBe(false);
  });

  // D 
  test("verifique o comportamento da função com um personagem com a defesa igual a zero.", () => {
    const defenseIsZero = {
      name: "Macho",
      life: 1500,
      defense: 0,
      force: 5,
    };

    const result = validateCharacter(defenseIsZero);
    expect(result).toBe(false);
  });

  // E 
  test("verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
    const isNegative = {
      name: "Macho",
      life: -1500,
      defense: 10,
      force: 5,
    };

    const result = validateCharacter(isNegative);
    expect(result).toBe(false);
  });

  // F 
  test("verifique o comportamento da função com um personagem com as informações validas", () => {
    const isNegative = {
      name: "Macho",
      life: 1500,
      defense: 10,
      force: 5,
    };

    const result = validateCharacter(isNegative);
    expect(result).toBe(true);
  });
});