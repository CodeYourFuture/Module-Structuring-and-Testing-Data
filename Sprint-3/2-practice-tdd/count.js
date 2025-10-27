function countChar(stringOfCharacters, findCharacter) {
  let pattern = new RegExp(findCharacter, "g");

  let matchingChars = stringOfCharacters.match(pattern);

  if (matchingChars === null) {
    return 0;
  }

  return matchingChars.length;
}

module.exports = countChar;
