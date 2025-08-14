function countChar(stringOfCharacters, findCharacter) {
    let count = 0; // this start counting from 0
    for (let index = 0; index < stringOfCharacters.length; index++) {
        // Loops through every character in the stringOfCharacters.
       if (stringOfCharacters[index] === findCharacter) {
        // check if the current index in stringCharacter matches the findCharacter
        count++;
        
       }
        
    }
        
    return count;

    }
  

module.exports = countChar; // this means this function is available for other file, and can also be tested here.
