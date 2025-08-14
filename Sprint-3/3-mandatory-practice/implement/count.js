function countChar(stringOfCharacters, findCharacter) {
    return stringOfCharacters.split("").filter((char)=>char===findCharacter).length
}
//console.log(countChar("heello","l"))
module.exports = countChar;