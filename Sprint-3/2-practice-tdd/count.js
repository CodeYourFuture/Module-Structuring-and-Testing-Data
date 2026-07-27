function countChar(stringOfCharacters, findCharacter) {
  if (stringOfCharacters === "" || findCharacter === "") {
    throw new Error("string an char are not given");
  }

  let count = 0;
  for (const char of stringOfCharacters) {
    if (char === findCharacter) {
      count++;
    }
  }
  return count;
}
console.log(countChar("aaaaaae", "a"));
module.exports = countChar;
