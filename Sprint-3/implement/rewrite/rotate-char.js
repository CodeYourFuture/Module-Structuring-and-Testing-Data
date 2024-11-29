// ## 💪 Stretch
// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

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

module.exports = rotateCharacter;
