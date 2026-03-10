function countChar(stringOfCharacters, findCharacter) {
  if (findCharacter == "") return 0;
  
  const string = stringOfCharacters.toLowerCase();
  const char = findCharacter.toLowerCase();

  return string.split(char).length - 1;
}

module.exports = countChar;
