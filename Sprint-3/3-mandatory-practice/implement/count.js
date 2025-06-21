function countChar(stringOfCharacters, findCharacter) {
     let count = 0;                             // Counter keeping logging matching characters
     
     for (let char of stringOfCharacters) {     // Check each character in the input
        if (char === findCharacter) {           // If the character matches the target
            count++;                            // Increase the count by 1
        }
    }
    return count;                               // Return the total matches found
}
 
module.exports = countChar;

 
  