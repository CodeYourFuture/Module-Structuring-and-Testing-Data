function countChar(stringOfCharacters, findCharacter) {
  const arrayOfCharacters = stringOfCharacters.split("");
  let count = 0;
  for (let index = 0; index < arrayOfCharacters.length; index++) {
    if (arrayOfCharacters[index] === findCharacter) {
      count += 1;
    }
  }
  //console.log(arrayOfCharacters);
  //console.log(count);
  return count;
}

module.exports = countChar;
