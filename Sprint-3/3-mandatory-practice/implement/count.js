function countChar(stringOfCharacters, findCharacter) {
  let numberOfFindChar = 0;
  let lengthOfString = stringOfCharacters.length;
  for (let i = 0; i < lengthOfString; i++) {
    if (findCharacter === stringOfCharacters[i]) numberOfFindChar++;
  }
  return numberOfFindChar;
}

//console.log(countChar("aaaaaaaaaaaaaaaaaaaaabaaaa", "b"));

module.exports = countChar;
