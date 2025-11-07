function countChar(stringOfCharacters, findCharacter) {
  if (typeof stringOfCharacters!= "string") {
    throw new Error("Input should be a string");
  }
   if (typeof findCharacter !== "string" || findCharacter.length != 1){
    throw new Error ("Input must be a single character");
  }

  let count = 0;
  for(let char of stringOfCharacters) {
     if (char === findCharacter) {
      count++;
     }
 }
    return count;

}

module.exports = countChar;

console.log(countChar("amazon", "a"));

// Added lines to check cases and return count of characters.
