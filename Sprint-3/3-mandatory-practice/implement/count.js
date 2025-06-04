function countChar(stringOfCharacters, findCharacter) {
    return stringOfCharacters.split('').filter((letter) => letter === findCharacter).length
}

module.exports = countChar;

console.log(countChar('abcd','a'))