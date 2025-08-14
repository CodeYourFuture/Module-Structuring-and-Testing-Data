function countChar(stringOfCharacters, findCharacter) {
    if (findCharacter.length > 1 || findCharacter < 0) return "error"
    const count = stringOfCharacters.split(findCharacter).length-1;
    return count;
}

module.exports = countChar;

console.log(countChar("aaaaa", "a"));
console.log(countChar("abcde", "f"));
console.log(countChar("food", "f"));
console.log(countChar("butterfly", "t"));
console.log(countChar("abcabcabc", "abc"));