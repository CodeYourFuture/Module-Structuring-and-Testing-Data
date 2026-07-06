function countChar(stringOfCharacters, findCharacter) {
  const regEx = new RegExp(`[^${findCharacter}]`, "g");
  const numOfMatchedChar = stringOfCharacters.replaceAll(regEx, "").length;
  return numOfMatchedChar;
}

console.log(countChar("dafsadf", "a"));

module.exports = countChar;
