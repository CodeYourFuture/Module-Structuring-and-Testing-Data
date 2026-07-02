function countChar(stringOfCharacters, findCharacter) {
  if (!stringOfCharacters.includes(findCharacter)) {
    return 0;
  }
  return stringOfCharacters.split("").filter((char) => char === findCharacter)
    .length;
}

module.exports = countChar;
