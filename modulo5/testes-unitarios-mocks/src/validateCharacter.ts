import { Character } from "./model/Character"

export const validateCharacter = (character: Character) => {
  if (
    !character.name ||
    character.life === undefined ||
    character.force === undefined ||
    character.defense === undefined
  ) {
    return false;
  }

  if (character.life <= 0 || character.force <= 0 || character.defense <= 0) {
    return false;
  }

  return true;
};