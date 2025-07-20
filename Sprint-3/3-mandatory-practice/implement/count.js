function countChar(stringOfCharacters, findCharacter) {
    let count = 0;  // start with zero, this helps to solve the issue of 
    // non-occurence 

    let i = 0; //where i is the index position indicating 
    // we are starting from the beginning
  
    // The while loop goes through the string, one character at a time
    // gets the character at the current position and
    // checks if it matches the character we're looking for
    while (i < stringOfCharacters.length) {
      let currentChar = stringOfCharacters[i];
      if (currentChar === findCharacter) {
        count = count + 1;
      }
  
      i = i + 1;  //Move to the next character in the string
    }
  
    return count; //return the final count
}

module.exports = countChar;