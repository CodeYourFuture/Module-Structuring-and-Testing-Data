function countChar(stringOfCharacters, findCharacter) {
  if (
    typeof stringOfCharacters !== "string" ||
    typeof findCharacter !== "string"
  ) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < stringOfCharacters.length; i++) {
    if (stringOfCharacters[i] === findCharacter) {
      count++;
    }
  }
  return count;
}
console.log(countChar("aaaaa", "a")); // should return 5
console.log(countChar("bravo", "u")); // should return 0
console.log(countChar("", "a")); // should return 0
console.log(countChar("1-2-3-4-5-", "-")); // should return 5
console.log(countChar("AaAa", "A")); // should return 2
module.exports = countChar;
