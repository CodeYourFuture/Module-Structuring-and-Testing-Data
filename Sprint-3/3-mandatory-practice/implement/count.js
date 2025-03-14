function countChar(stringOfCharacters, findCharacter) {
    const count = stringOfCharacters.split(findCharacter).length-1;
    return count;
}

module.exports = countChar;

console.log(countChar("aaaaa", "a"));
console.log(countChar("abcde", "f"));
console.log(countChar("food", "f"));
console.log(countChar("butterfly", "t"));
