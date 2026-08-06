//counts the number of times a character occurs in a string
function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count+=1;
    }
  }


  return count 
  
}

module.exports = countChar;
