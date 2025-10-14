function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  
  // Loop through each character in the string
  for (let i = 0; i < stringOfCharacters.length; i++) {
    // If the current character matches the character we're looking for
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
  
  return count;
}

module.exports = countChar;
