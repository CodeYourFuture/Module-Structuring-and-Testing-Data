function countChar(stringOfCharacters, findCharacter) {
  if (findCharacter.length === 0 || stringOfCharacters.length === 0) return 0;
  else return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;
