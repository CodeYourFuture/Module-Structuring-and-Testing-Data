function countChar(stringOfCharacters, findCharacter) {
  charList = stringOfCharacters.split("");
  count = charList.filter((char) => char == findCharacter);

  return count.length;
}
module.exports = countChar;
