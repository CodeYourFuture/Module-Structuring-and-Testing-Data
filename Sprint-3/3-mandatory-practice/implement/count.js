function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (let c of stringOfCharacters) {
    if (c === findCharacter) count++;
  }
  return count;
}

module.exports = countChar;
