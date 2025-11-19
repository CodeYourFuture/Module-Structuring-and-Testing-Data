function countChar(stringOfCharacters, findCharacter) {
  const totalChar = stringOfCharacters.split(findCharacter);

  return totalChar.length - 1;
}

module.exports = countChar;
