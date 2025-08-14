function countChar(stringOfCharacters, findCharacter) {
    let count = 0;  // start with zero, this helps to solve the issue of 
    // non-occurence 

    let i = 0; //where i is the index position indicating 
    // we are starting from the beginning
  
    // The for loop goes through the string, one character at a time
    // gets the character at the current position and
    // checks if it matches the character we're looking for
    for (i; i < stringOfCharacters.length; i++) {
      let currentChar = stringOfCharacters[i];
      if (currentChar === findCharacter) {
        count = count + 1;
      }
      
    }
      return count; //return the final count
}

module.exports = countChar;