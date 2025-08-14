function countChar(stringOfCharacters, findCharacter) {let count = 0;
    let position = 0;

    while ((position = stringOfCharacters.indexOf(findCharacter, position)) !== -1) {
        count++;  
        position++; 
    }

    return count;
}

module.exports = countChar;