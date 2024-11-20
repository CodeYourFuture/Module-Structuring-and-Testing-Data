// countChar.js

function countChar(str, char) {
    let count = 0;
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // If the current character matches the one we're looking for, increase the count
      if (str[i] === char) {
        count++;
      }
    }
  
    return count;
  }
  
  module.exports = countChar;
  