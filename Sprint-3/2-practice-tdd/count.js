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
console.log(countChar("hello", "l")); // Expected: 2
console.log(countChar("javascript", "a")); // Expected: 2
console.log(countChar("hello", "z")); // Expected: 0
console.log(countChar("null", "")); // Expected: "Error: The character to count must be a single character."
console.log(countChar("", "a")); // Expected: "Error: The string cannot be empty."
console.log(countChar("hello", "ll")); // Expected: "Error: The character to count must be a single character."
console.log(countChar("hipopotamos' make wonderful pets", "o")); // Expected: 3
console.log(countChar("hipopotamos", "p")); // Expected: 1
console.log(countChar("hipopotamos' are a friendly animal", "t")); // Expected: 1
console.log(countChar("hipopotamos", "x")); // Expected: 0
console.log(countChar("Pneumonoultramicroscopicsilicovolcanoconiosis", "i")); // Expected: 6
console.log(countChar("null", "")); // Expected: "Error: The character to count must be a single character."
console.log(countChar("", "a")); // Expected: "Error: The string cannot be empty."
console.log(countChar("hello", "ll")); // Expected: "Error: The character to count must be a single character."
console.log(countChar(null, "a")); // Expected: "Error: The input string cannot be null or undefined."

module.exports = countChar;
