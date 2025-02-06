function countChar(stringOfCharacters, findCharacter) {
  let strOccurance = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      strOccurance++;
    }
  }
  return strOccurance;
}
console.log(countChar("Name", "a"));
console.log(countChar("NAME", "a"));
console.log(countChar("Name", "O"));
module.exports = countChar;
