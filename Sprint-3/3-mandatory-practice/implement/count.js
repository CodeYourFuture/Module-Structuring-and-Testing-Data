function countChar(stringOfCharacters, findCharacter) {
  if (findCharacter === "") {
    throw new Error("findCharacter cannot be an empty string");
  }
  return stringOfCharacters.split(findCharacter).length - 1;
}

console.log(countChar("a", "a")); 
console.log(countChar("a", "b")); 
console.log(countChar("", "a"));
console.log(countChar("", ""));
module.exports = countChar;
