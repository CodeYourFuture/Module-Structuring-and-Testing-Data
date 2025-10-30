function countChar(stringOfCharacters, findCharacter) {
  // 1. Validate 'stringOfCharacters' input
  if (stringOfCharacters === null || stringOfCharacters === undefined) {
    throw new Error("The input string cannot be null or undefined.");
  }
  if (typeof stringOfCharacters !== "string") {
    throw new Error("The input string must be a string type.");
  }

  // 2. Validate 'findCharacter' input
  if (typeof findCharacter !== "string" || findCharacter.length !== 1) {
    // This handles null, undefined, and strings that aren't a single character (including empty string "")
    throw new Error(
      "The character to count must be a single character string."
    );
  }

  // 3. Handle the empty string case (returns 0)
  if (stringOfCharacters.length === 0) {
    return 0;
  }

  // 4. Perform the count
  let count = 0;
  for (let ch of stringOfCharacters) {
    if (ch === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;

// implement a function countChar that counts the number of times a character occurs in a string
