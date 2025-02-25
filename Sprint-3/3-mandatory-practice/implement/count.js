function countChar(stringOfCharacters, findCharacter) {
    const count = stringOfCharacters.split(findCharacter);
    return  count.length-1;
}



module.exports = countChar;

