// our function;
function countChar(stringOfCharacters, findCharacter) {
  if (!stringOfCharacters || !findCharacter) {
    return 0;
  }
  let numberOfChar = 0;
  for (let wantedChar of stringOfCharacters) {
    if (wantedChar === findCharacter) {
      numberOfChar++;
    }
  }
  return numberOfChar;
}

module.exports = countChar;
