function countChar(stringOfCharacters, findCharacter) {
  // Ensure valid inputs
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string"
  ) {
    return 0;
  }

  // Count occurrences
  let count = 0;
  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;
