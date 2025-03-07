// for (variable of iterable) {
//     // code block to be executed
//   }
function countChar(stringOfCharacters, findCharacter) {
    let count = 0;

    if (stringOfCharacters.includes(findCharacter)) {

        for (let letter of stringOfCharacters) {
            if (letter === findCharacter) {
                count +=1;
            }
        } return count;
    } else 
    return 0;
}

module.exports = countChar;
