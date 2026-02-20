function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (char of stringOfCharacters) {
    if (char === findCharacter) {
      count = count + 1;
    }}
  return count;
}

module.exports = countChar;
