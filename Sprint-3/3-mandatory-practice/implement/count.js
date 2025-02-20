function countChar(stringOfCharacters, findCharacter) {
    return stringOfCharacters.split('').filter (char => char===findCharacter).length;
}

module.exports = countChar;