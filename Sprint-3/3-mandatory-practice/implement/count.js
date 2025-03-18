function countChar(stringOfCharacters, findCharacter) {

    if (findCharacter.length == 1)
    {
    const count = stringOfCharacters.split(findCharacter);
    return  count.length-1;
    }
    else 
    {
        return 'The character to count must be single character'
    }
}



module.exports = countChar;

