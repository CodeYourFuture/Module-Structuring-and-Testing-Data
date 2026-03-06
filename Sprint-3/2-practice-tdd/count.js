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
console.log(countChar("aaaaa", "a"));//print 5
console.log(countChar("aaaaa", "z"));//print 0