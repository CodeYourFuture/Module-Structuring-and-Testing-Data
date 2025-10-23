function countChar(stringOfCharacters, findCharacter) {
  if (stringOfCharacters == null) {
    return "Error: The input string cannot be null or undefined.";
  }

  if (stringOfCharacters.length === 0) {
    return "Error: The string cannot be empty.";
  }

  const chars = [...stringOfCharacters];
  const findChars = [...findCharacter];

  if (!findCharacter || findChars.length !== 1) {
    return "Error: The character to count must be a single character.";
  }

  let count = 0;
  for (let ch of chars) {
    if (ch === findCharacter) count++;
  }

  return count;
}

// Examples
countChar("hello", "l"); // returns 2
countChar("javascript", "a"); // returns 2
countChar("hello", "z"); // returns 0
countChar("null", ""); // "Error: The character to count must be a single character."
countChar("", "a"); // "Error: The string cannot be empty."
countChar("hello", "ll"); // "Error: The character to count must be a single character."
countChar("hipopotamos' make wonderful pets", "o"); // returns 3
countChar("hipopotamos", "p"); // returns 1
countChar("hipopotamos' are a friendly animal", "t"); // returns 1
countChar("hipopotamos", "x"); // returns 0
countChar("Pneumonoultramicroscopicsilicovolcanoconiosis", "i"); // returns 6
console.log(countChar("null", ""));
console.log(countChar("", "a"));
console.log(countChar("hello", "ll"));
countChar(null, "a"); // "Error: The string cannot be empty."

module.exports = countChar;
