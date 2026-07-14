function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    } else {
      return count;
    }
  }
  return count;
}
console.log(countChar("bbbbb", "b"));
module.exports = countChar;
