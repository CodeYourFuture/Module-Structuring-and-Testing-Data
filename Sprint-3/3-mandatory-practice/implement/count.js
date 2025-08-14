function countChar(stringOfCharacters, findCharacter) {
  let count = 0; // start a count with 0
  for (let char of stringOfCharacters) {
    // repeat for each character in the string
    if (char === findCharacter) {
      // check if the character matches the one we are looking for.
      count++; // if it does increase the count by 1.
    }
  }

  return count;
}
console.log(countChar("aAaAaAaAa", "a")); // example usage should return 5.

module.exports = countChar;
