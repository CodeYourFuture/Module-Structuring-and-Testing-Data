function countChar(stringOfCharacters, findCharacter) {
   return stringOfCharacters.split('').filter(c => c === findCharacter).length;
}


module.exports = countChar;