function countChar(stringOfCharacters, findCharacter) {
  if (
    typeof stringOfCharacters != "string" ||
    typeof findCharacter != "string"
  ) {
    throw new Error("Please enter a valid string");
  }

  if (findCharacter.length != 1) {
    throw new Error(
      "Please enter a single character for findCharacter, e.g. 't"
    );
  }

  if (stringOfCharacters.length === 0) {
    throw new Error(
      "Please enter a non-empty string, e.g. 'A series of unfortunate events'"
    );
  }

  let charCount = 0;
  let lowerCaseChar = findCharacter.toLowerCase();
  for (char of stringOfCharacters.toLowerCase()) {
    if (lowerCaseChar === char) charCount++;
  }

  return charCount;
}

module.exports = countChar;
