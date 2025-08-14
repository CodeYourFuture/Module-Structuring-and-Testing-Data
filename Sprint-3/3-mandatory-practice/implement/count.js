function countChar(stringOfCharacters, findCharacter) {
    //take a given string stringOfCharacters and check its not empty
    //check if findCharacter is a single character
    //look for findCharacter in stringOfCharacters
    //count how many times findCharacter appears in stringOfCharacters
    let count = 0;
    if(stringOfCharacters.length > 0 && findCharacter.length === 1) {
        for(char of stringOfCharacters) {
            if (char === findCharacter) {
                count++;
            }
        }
    } else {
        if (stringOfCharacters.length === 0) {
            return "String is empty";
        } else if (findCharacter.length !== 1) {
            return "Please provide a single character to search for";
        }
    }
    
    return count;
}

module.exports = countChar;