function countChar(stringOfCharacters, findCharacter) {
  const arrayOfCharacters = stringOfCharacters.split("");
  let count = 0;
  for (let index = 0; index < arrayOfCharacters.length; index++) {
    if (arrayOfCharacters[index] === findCharacter) {
      count += 1;
    }
  }
  return count;
}

module.exports = countChar;
