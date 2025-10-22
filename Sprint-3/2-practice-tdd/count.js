function countChar(stringOfCharacters, findCharacter) {
  return stringOfCharacters.split("").reduce((count, char) => {
    if (char === findCharacter) count++;
    return count;
  }, 0);
}

module.exports = countChar;
