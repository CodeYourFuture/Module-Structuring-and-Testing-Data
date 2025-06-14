function countChar(stringOfCharacters, findCharacter) {
    const regEx = new RegExp (findCharacter,'ig');
    const howMany = stringOfCharacters.match(regEx);

    if (howMany != null) {
        return howMany.length
    }
    else return 0
}

module.exports = countChar;



// const str = "the rain in spain";
// const char = "u";
// const count = countChar(str, char);
// console.log(count);