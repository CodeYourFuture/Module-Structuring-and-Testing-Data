function countChar(stringOfCharacters, findCharacter) {
    let count = 0; 
    for (let i = 0; i <stringOfCharacters.length;i++){
        if(stringOfCharacters.charAt(i) === findCharacter ) {
            count++
        }
    }
    return count;
}
console.log (countChar('Maryna' , 'a'))
module.exports = countChar;