function countChar(stringOfCharacters, findChar) {
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findChar) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
