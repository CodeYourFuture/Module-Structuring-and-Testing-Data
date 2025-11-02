function countChar(stringOfCharacters, findCharacter) {
  // stringOfCharacters and findCharacter both should be string.
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string"
  ) {
    return "Values Can not be Numbers";
  }

  // stringOfCharacters should be longer than findCharacter.
  if (
    stringOfCharacters.length !== 0 &&
    findCharacter.length > stringOfCharacters.length
  ) {
    return "the stringOfCharacters MUST be lonegr than findingcharacter";
  }

  //stringOfCharacters shoud not be empty
  if (stringOfCharacters.length === 0) {
    return "stringOfCharacters can not be empty";
  }

  //findCharacter should not be empty
  if (findCharacter.length === 0) {
    return "findCharacter can not be empty";
  }

  // finscharatcter should be single character.
  if (findCharacter.length !== 1) {
    return "findCharacter must be a single character";
  }

  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
  return count;
}

module.exports = countChar;
