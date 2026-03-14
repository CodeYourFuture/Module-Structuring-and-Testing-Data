function countChar(stringOfCharacters, findCharacter) {
  let count = 0;
  const str = stringOfCharacters.length;

  for (let i = 0; i < str; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count += 1;
      console.log(stringOfCharacters[i]);
    }
  }
  return count;
}

module.exports = countChar;
