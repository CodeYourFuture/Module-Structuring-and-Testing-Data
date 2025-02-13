function countChar(stringOfCharacters, findCharacter) {
    let splitArr = stringOfCharacters.split(findCharacter);
    return splitArr.length-1;
}

module.exports = countChar;