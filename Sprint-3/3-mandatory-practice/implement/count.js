function countChar(stringOfCharacters, findCharacter) {
  if (!stringOfCharacters.includes(findCharacter))
    return 0;
  else {
    let count = 0;
    for (let char of stringOfCharacters) {
      if (char === findCharacter) {
        count++;
      }
    }
    return count;
  }
}

module.exports = countChar;