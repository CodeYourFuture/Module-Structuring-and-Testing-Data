function countChar(stringOfCharacters, findCharacter) {
  const characterOccurrence = stringOfCharacters.split(findCharacter).length - 1;
  return characterOccurrence;
}

module.exports = countChar;
