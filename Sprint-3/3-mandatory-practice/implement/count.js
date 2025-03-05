function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    for (char in stringOfCharacters) {
        if (char === findCharacter) count++;
    }
    return count;
}

module.exports = countChar;