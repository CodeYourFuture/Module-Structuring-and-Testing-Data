// The test should fail because the current function always returns 5.
// function countChar(stringOfCharacters, findCharacter) {
//  return 5
// }

// module.exports = countChar;
// Here the placeholder(5) is replaced to implement the function to pass the tests
function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    for (let char of stringOfCharacters) {
      if (char === findCharacter) count++;
    }
    return count;
  }
  
  module.exports = countChar;