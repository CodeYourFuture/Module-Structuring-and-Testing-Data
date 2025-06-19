function countChar(stringOfCharacters, findCharacter) {
  let count = 0; // Initialize a counter
  for (let i = 0; i < stringOfCharacters.length; i++) { // Loop through each character in the string
    // If the current character matches the character we are looking for, increment the counter
    // This is a case-sensitive comparison
    // If you want a case-insensitive comparison, you can convert both to lower case
    // or upper case before comparing
    if (stringOfCharacters[i] === findCharacter) { // Check if the character matches
      // Increment the count if it matches
      count++; // Increment the counter
    }
  }
  return count; // Return the total count of matching characters
}

module.exports = countChar;