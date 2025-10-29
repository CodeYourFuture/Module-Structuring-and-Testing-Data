function countChar(stringOfCharacters, findCharacter) {
  if (stringOfCharacters == null) {
    return "Error: The input string cannot be null or undefined.";
  }

  if (stringOfCharacters.length === 0) {
    return "Error: The string cannot be empty.";
  }

  if (findCharacter == null) {
    return "Error: The character to count must be a single character.";
  }

  const findChars = [...findCharacter];
  if (findChars.length !== 1) {
    return "Error: The character to count must be a single character.";
  }

  let count = 0;
  for (let ch of stringOfCharacters) {
    if (ch === findCharacter) count++;
  }

  return count;
}

module.exports = countChar;

// implement a function countChar that counts the number of times a character occurs in a string