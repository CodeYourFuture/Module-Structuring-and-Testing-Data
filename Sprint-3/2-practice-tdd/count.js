function countChar(stringOfCharacters, findCharacter) {
  return stringOfCharacters.split('').filter(x => x === findCharacter).length
}

module.exports = countChar;
