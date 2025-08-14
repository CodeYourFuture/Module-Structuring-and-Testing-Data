function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const char of stringOfCharacters) {
    //loops through each character in the string input
    if (char === findCharacter)
      //checks if the character matches the findCharacter input
      count++; //increases the count when a match is found in the input
  }
  return count; //return the actual count of the characters that match
}

module.exports = countChar;
