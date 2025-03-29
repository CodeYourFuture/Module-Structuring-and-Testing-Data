function countChar(stringOfCharacters, findCharacter) {
    if(findCharacter==="") return 0;
    else return stringOfCharacters.split(findCharacter).length -1;
}

module.exports = countChar;