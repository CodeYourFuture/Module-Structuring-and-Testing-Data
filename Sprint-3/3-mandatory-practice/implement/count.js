function countChar(stringOfCharacters, findCharacter) {
    let count = 0;
    for (time of stringOfCharacters){
        if (time == findCharacter) {
            count+=1
        }
    }
    return count
}


module.exports = countChar;