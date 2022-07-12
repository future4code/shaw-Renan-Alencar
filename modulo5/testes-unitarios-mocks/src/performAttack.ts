import { Character } from "./model/Character";
import { validateCharacter } from "./validateCharacter";

export const performAttack = (attacker: Character, defender: Character) => {
  if(!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if(attacker.force > defender.defense){
    defender.life -= attacker.force - defender.defense
  }
}

export const performAttackValidator = (attacker: Character, defender: Character, validator:(input:Character) => boolean) => {
  if(!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if(attacker.force > defender.defense){
    defender.life -= attacker.force - defender.defense
  }
}