function countChar(stringOfCharacters, findCharacter) {

  if (stringOfCharacters === undefined || findCharacter === undefined) {
    throw new Error(
      "Function requires exactly two arguments: a string and a character to find."
    );
  }

  if (typeof stringOfCharacters !== 'string'){
    throw new Error("First argument must be a string.");
  }

  if (typeof findCharacter !== "string") {
    throw new Error("Second argument must be a string.");
  }

  if (findCharacter.length !== 1) {
    throw new Error("Character to find must be a single character.");
  } 

  if (!stringOfCharacters.length) {
    return 0;
  }

  return [...stringOfCharacters].filter(char => char === findCharacter).length;
}

module.exports = countChar;
