function countChar(stringOfCharacters, findCharacter) {
    // This method works by splitting the string by the `findCharacter`.
    // The number of resulting substrings will be one more than the number
    // of times the `findCharacter` appeared.
    // Example: "banana".split('a') results in ["b", "n", "n", ""], which has length 4.
    // The character 'a' appeared 3 times. So, length - 1 gives the count.
    return stringOfCharacters.split(findCharacter).length - 1;
}

module.exports = countChar;