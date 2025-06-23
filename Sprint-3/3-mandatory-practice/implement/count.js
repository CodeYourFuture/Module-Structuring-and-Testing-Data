function countChar(stringOfCharacters, findCharacter) {
    let countString = 0;

    for(let i = 0; i < stringOfCharacters.length; i++) {
        if (stringOfCharacters[i] === findCharacter) {
      countString++;
    }
    }
    return countString++;
}

module.exports = countChar;

// how many times a charactor appears in a string
// what are the inputs and outputs
