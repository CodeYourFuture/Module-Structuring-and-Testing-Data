function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const c of stringOfCharacters) {
    if (c === findCharacter) count++;
  }
  return count;
}
module.exports = countChar;
