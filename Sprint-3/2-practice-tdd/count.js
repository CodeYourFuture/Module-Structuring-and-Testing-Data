function countChar(stringOfCharacters, findCharacter) {
  let characterOccurrence = "";
  if (typeof stringOfCharacters === "string" && typeof findCharacter === "string") {
    stringOfCharacters = stringOfCharacters.toLowerCase();
    findCharacter = findCharacter.toLowerCase();
    if (findCharacter.length === 1) {
      characterOccurrence = stringOfCharacters.split(findCharacter).length - 1;
    } else {
      characterOccurrence = "invalid input: Input just one character";
    }
  } else {
    characterOccurrence = "Invalid input: input should be a string";
  }

  return characterOccurrence;
}

module.exports = countChar;
