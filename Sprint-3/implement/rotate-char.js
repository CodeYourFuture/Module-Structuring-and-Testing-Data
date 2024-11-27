// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.
// This kind of challenge is often seen in coding interviews and technical assessments for software development roles.
// I used these resources to help me
// https://www.geeksforgeeks.org/caesar-cipher-in-cryptography/
// https://www.youtube.com/watch?v=dNKjA_eAPFM  (Caesars Cipher - JavaScript Algorithms and Data Structures - Projects Free Code Camp)

function rotateCharacter(character, shift) {
  // Helper function to rotate within the alphabet (a-z or A-Z)
  const rotateInAlphabet = (code, base) => ((code - base + shift) % 26) + base;

  // I'm getting the character code using the string method charCodeAt
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
  const code = character.charCodeAt(0);

  // Handle lowercase letters (a-z). This is the range of lowercase letters in ASCII.
  // I found this range of lowercase letters in ASCII by searching "what is the range of lowercase letters in charCode JS"
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(rotateInAlphabet(code, 97));
  }

  // Handle uppercase letters (A-Z). I found this range of uppercase letters in ASCII by searching
  // "what is the range of uppercase letters in charCode"
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(rotateInAlphabet(code, 65));
  }

  // Not a letter? Return the character unchanged based on the // Scenario: Leave Non-Letter Characters Unchanged:
  return character;
}
// Acceptance criteria:

// Given a character and a shift value,
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
console.log(rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)
console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around
