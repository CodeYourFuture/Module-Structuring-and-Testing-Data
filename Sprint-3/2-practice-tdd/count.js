function countChar(stringOfCharacters, findCharacter) {
  const charRegex = new RegExp(findCharacter, "g");
  const charArr = [...stringOfCharacters.matchAll(charRegex)];
  return charArr.length;
}

module.exports = countChar;
