function countChar(stringOfCharacters, findCharacter) {
    let charCount = stringOfCharacters.split(findCharacter).length -1
    return charCount
}


module.exports = countChar;
