function countChar(stringOfCharacters, findCharacter) {
// Count how many times findCharacter appears in stringOfCharacters
return stringOfCharacters.split(findCharacter).length - 1;

}

module.exports = countChar;
