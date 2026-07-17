function countChar(stringOfCharacters, findCharacter) {
//  return 5
//}   
    let count = 0;
    for (let char of stringOfCharacters) {
        if (char === findCharacter) {
            count ++;
        }
    }
    return count
} 

module.exports = countChar;
