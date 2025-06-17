function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    for (let i = 0; i < stringOfCharacters.length; i++) {
        if (stringOfCharacters[i] === findCharacter) {
            count++;
        }
    }
    console.log(`The character "${findCharacter}" appears ${count} times in the string.`);
    return count
}


module.exports = countChar;