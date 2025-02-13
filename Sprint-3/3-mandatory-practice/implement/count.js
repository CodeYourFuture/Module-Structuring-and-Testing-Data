function countChar(stringOfCharacters, findCharacter) {
    let count = 0
    for (let i = 0; i < stringOfCharacters.length; i++) {
        if (stringOfCharacters[i] === findCharacter) {
            count++
        }
    }
    return count
}

console.log(countChar("HELLO", "l"));
console.log(countChar("world", "a"));
console.log(countChar("HELLO", "L"));
console.log(countChar("HELLO world", "o"));

module.exports = countChar;