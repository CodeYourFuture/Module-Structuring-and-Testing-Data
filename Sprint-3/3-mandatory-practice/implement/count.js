function countChar(stringOfCharacters, findCharacter) {
  let occurance = 0;
  for (const letter of stringOfCharacters) {
    if (findCharacter === letter) {
      occurance++;
    }
  }
  return occurance;
}

module.exports = countChar;
