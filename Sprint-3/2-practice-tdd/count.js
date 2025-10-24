function countChar(stringOfCharacters, findCharacter) {
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string" ||
    findCharacter.length !== 1
  ) {
    return 0;
  }

  if (stringOfCharacters.length === 0) {
    return 0;
  }

  return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;
