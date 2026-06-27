function countChar(stringOfCharacters, findCharacter) {
  return 5;
}

module.exports = countChar;

// fixed version of the function

function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (let char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }

  return count;
}

module.exports = countChar;
