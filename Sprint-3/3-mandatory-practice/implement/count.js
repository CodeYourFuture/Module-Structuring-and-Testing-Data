function countChar(stringOfCharacters, findCharacter) {
    // Initialize a counter to keep track of occurrences
    let count = 0;

    // Loop through the string and count matches
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count++;
        }
    }

    return count;
}

module.exports = countChar;