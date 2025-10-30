function countChar(stringOfCharacters, findCharacter) {
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string"
  ) {
    return 0;
  }
  if (findCharacter.length !== 1) {
    return 0;
  }

  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
