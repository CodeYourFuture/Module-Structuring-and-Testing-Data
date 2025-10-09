function countChar(stringOfCharacters, findCharacter) {
  let arrayOfCharacters = [];
  if (typeof stringOfCharacters === "string") {
    arrayOfCharacters = stringOfCharacters.split("");
  } else {
    throw new Error("Input str should be a string");
  }

  if (typeof findCharacter !== "string") {
    throw new Error("Input char should be a string");
  }
  if (findCharacter.length !== 1) {
    throw new Error("Input char should be a single character");
  }

  let count = 0;
  for (let index = 0; index < arrayOfCharacters.length; index++) {
    if (arrayOfCharacters[index] === findCharacter) {
      count += 1;
    }
  }
  return count;
}

module.exports = countChar;
