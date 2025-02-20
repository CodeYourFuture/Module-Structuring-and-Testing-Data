function countChar(stringOfCharacters, findCharacter) {
  charList = stringOfCharacters.split("");
  console.log(charList);
  count = charList.filter((char) => char == findCharacter);
  console.log(count);

  return count.length;
}
console.log(countChar("aaaaaa", "a"));
module.exports = countChar;
