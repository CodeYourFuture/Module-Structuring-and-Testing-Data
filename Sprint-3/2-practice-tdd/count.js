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

// for mordern approach, we can use the following code
// function countChar(stringOfCharacters, findCharacter) {
//   return stringOfCharacters.split(findCharacter).length - 1;
// }
// module.exports = countChar;
