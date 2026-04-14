function countChar(stringOfCharacters, findCharacter) {
  if (typeof stringOfCharacters !== "string") return 0;

  let count = 0;

  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }

  return count;
}
module.exports = countChar;
