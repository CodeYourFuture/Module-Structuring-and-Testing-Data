function countChar(stringOfCharacters, findCharacter) {

    if (findCharacter.length == 1)
    {
    const count = stringOfCharacters.split(findCharacter);
    return  count.length-1;
    }
    else 
    {
        return 'The finding character should not more than one character'
    }
}



module.exports = countChar;

