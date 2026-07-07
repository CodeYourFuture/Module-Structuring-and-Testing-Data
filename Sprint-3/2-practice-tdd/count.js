function countChar(stringOfCharacters, findCharacter) {
 let count = 0;
  str = stringOfCharacters
  char = findCharacter
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

module.exports = countChar;
