function countChar(stringOfCharacters, findCharacter) {
    
        let count = 0;
        // Loop through the string and count occurrences of `findCharacter`
        for (let i = 0; i < stringOfCharacters.length; i++) {
          if (stringOfCharacters[i] === findCharacter) {
            count++;
          }
        }
        return count;
      }
      
     
      

module.exports = countChar;