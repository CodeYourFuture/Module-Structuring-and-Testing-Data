function countChar(stringOfCharacters, findCharacter) {
    // start a count of 0
    let count = 0;

    // check each of the characters in the string one by one.
    for (let i = 0; i < stringOfCharacters.length; i++) {
        // checks if the current characters matches the one were looking for in the string.
        if (stringOfCharacters[i] === findCharacter)
            // if it does, we increment the count by 1.
            count = count + 1;
}
    
    return count;
}
console.log(countChar("aaaaa", "a")); // 5
console.log(countChar("hello", "l")); // 2

module.exports = countChar;