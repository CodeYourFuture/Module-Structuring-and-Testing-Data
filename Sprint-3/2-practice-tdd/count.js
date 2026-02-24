function countChar(stringOfCharacters, findCharacter) {
  const charRegex = new RegExp(findCharacter, "g");
  console.log(charRegex, typeof charRegex, "regex");
  const charArr = [...stringOfCharacters.matchAll(charRegex)];
  console.log(charArr, "array");
  return charArr.length;
}

module.exports = countChar;
