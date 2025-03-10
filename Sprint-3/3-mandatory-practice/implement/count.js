function countChar(stringOfCharacters, findCharacter) {
    if (typeof stringOfCharacters !== "string" || typeof findCharacter !== "string" || findCharacter.length !== 1) {
        throw new Error("Invalid input");
    }
    let count = 0;
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count++;
        }
    }
    return count;
}
console.log(countChar("baha", "a"));

module.exports = countChar;
