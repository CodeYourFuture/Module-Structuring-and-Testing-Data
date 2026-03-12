// implement a function countChar that counts the number of times a character occurs in a string

function countChar(stringOfCharacters, findCharacter) {
  let count = 0;

  for (const character of stringOfCharacters) {
    if (character === findCharacter) {
      count += 1;
    }
  }

  return count;
}

module.exports = countChar;
