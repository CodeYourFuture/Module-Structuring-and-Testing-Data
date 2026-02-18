function countChar(stringOfCharacters, findCharacter) {
  let sum = 0;
  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      sum++;
    }
  }
  return sum;
}

module.exports = countChar;
