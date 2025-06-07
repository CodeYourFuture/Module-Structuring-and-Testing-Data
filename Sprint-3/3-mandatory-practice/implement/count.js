function countChar(stringOfCharacters, findCharacter) {
    let counter = 0
    for (let i = 0 ; i <stringOfCharacters.length; i++) {
        if (stringOfCharacters[i]=== findCharacter) {
            counter ++
        }
    }
    return counter
}

console.log(countChar("aaaa","a"))

module.exports = countChar;