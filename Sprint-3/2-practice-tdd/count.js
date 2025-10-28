function countChar(stringOfCharacters, findCharacter) {
  if (typeof stringOfCharacters !== 'string'){
    throw new Error("First argument must be a string.");
  }
  if (typeof findCharacter !== "string") {
    throw new Error("Second argument must be a string.");
  }
  if (findCharacter.length !== 1) {
    throw new Error("Character to find must be a single character.");
  } 
  if (stringOfCharacters.length === 0) {
    return 0;
  }
  console.log(Array.from(stringOfCharacters));
  
  return Array.from(stringOfCharacters).filter(char => char === findCharacter).length;
}

module.exports = countChar;
