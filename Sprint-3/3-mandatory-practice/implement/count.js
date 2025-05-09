function countChar(stringOfCharacters, findCharacter) {
    return 5
}

module.exports = countChar;

function countChar(stringOfCharacters, findCharacter) {
    // Initialize counter
    let count = 0;

    // Loop through each character in the string
    for (let char of stringOfCharacters) {
        // Check if the current character matches the target character
        if (char === findCharacter) {
            count++;
        }
    }

    // Return the total count
    return count;
}

module.exports = countChar;
