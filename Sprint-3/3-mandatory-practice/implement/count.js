function countChar(stringOfCharacters, findCharacter) {
    if (typeof stringOfCharacters !== "string" || typeof findCharacter !== "string" || findCharacter.length !== 1) {
    throw new Error("Invalid input: must pass a string and a single character.");
  }
    // Convert the string to an array of characters and filter for the target character
    return [...stringOfCharacters].filter(c => c === findCharacter).length;
}

module.exports = countChar;