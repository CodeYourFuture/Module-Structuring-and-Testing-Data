function countChar(stringOfCharacters, findCharacter) {
  let arrayOfCharacters = [];
  if (typeof stringOfCharacters === "string") {
    arrayOfCharacters = stringOfCharacters.split("");
  } else if (Array.isArray(stringOfCharacters)) {
    arrayOfCharacters = stringOfCharacters;
  } else if (typeof stringOfCharacters === "number") {
    arrayOfCharacters = stringOfCharacters.toString().split("");
  } else if (typeof stringOfCharacters === "object") {
    return 0;
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
