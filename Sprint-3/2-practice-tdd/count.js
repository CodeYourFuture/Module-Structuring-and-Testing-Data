function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (let i = 0; i < stringOfCharacters; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    } else {
      count = 0;
    }
  }
}
module.exports = countChar;
