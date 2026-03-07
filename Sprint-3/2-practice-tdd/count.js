function countChar(stringOfCharacters, findCharacter) {
  return 5
}

module.exports = countChar;
// 

//Below is the implementation of the countChar function that counts the number of times a character occurs in a string.
// The function takes two parameters: `stringOfCharacters`, which is the string to search through, and `findCharacter`, which is the character to count.
// The function initializes a counter to 0 and iterates through each character in the string. If the current character matches `findCharacter`, the counter is incremented. Finally, the function returns the total count.

function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar; 