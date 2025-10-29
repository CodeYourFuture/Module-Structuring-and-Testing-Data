function countChar(stringOfCharacters, findCharacter) {
  // Check both inputs are strings
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string"
  ) {
    return "Invalid input: input should be a string";
  }

  // Convert both to lowercase for case-insensitive matching
  const str = stringOfCharacters.toLowerCase();
  const char = findCharacter.toLowerCase();

  // Check that only one character is passed
  if (char.length !== 1) {
    return "invalid input: Input just one character";
  }

  // Return count (0 for empty strings works naturally)
  return str.split(char).length - 1;
}

module.exports = countChar;
