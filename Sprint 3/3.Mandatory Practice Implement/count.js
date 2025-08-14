function countChar(stringOfCharacters, findCharacter) {
    console.assert(typeof stringOfCharacters === 'string', 'The first argument must be a string');
    console.assert(typeof findCharacter === 'string', 'The second argument must be a string');

    let countChar = 0;
    stringOfCharacters = stringOfCharacters.toLowerCase();
    findCharacter = findCharacter.toLowerCase();
    for (let i = 0; i < stringOfCharacters.length; i++) {
        if (stringOfCharacters[i] === findCharacter) {
            countChar++;
        }
    }
    return countChar;
}

// Export the function
module.exports = countChar;