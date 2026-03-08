function countChar(stringOfCharacters, findCharacter) {
  if (typeof stringOfCharacters !== "string") {
    throw new Error("First argument must be a string");
  }
  if (typeof findCharacter !== "string" || findCharacter.length !== 1) {
    throw new Error("Second argument must be a single character");
  }

  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;