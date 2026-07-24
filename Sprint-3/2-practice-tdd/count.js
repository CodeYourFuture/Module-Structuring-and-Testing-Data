function countChar(stringOfCharacters, findCharacter) {
  let countTime = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] == findCharacter) {//take each character out from string to compare with the given character. If true, then add one to countTime.
      countTime = countTime + 1;
    }
  }
  return countTime;
}

module.exports = countChar;
