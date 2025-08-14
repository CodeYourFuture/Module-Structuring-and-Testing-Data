function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count++;
        }
    }
    return count;
}

console.log(countChar("hello world", "l")); // ➜ 3
console.log(countChar("Mississippi", "s")); // ➜ 4
console.log(countChar("banana", "n"));  

module.exports = countChar;