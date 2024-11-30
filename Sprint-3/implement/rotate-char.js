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
console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)


function rotateCharacter(char, shift) {
    const isUpperCase = char >= "A" && char <= "Z";
    const isLowerCase = char >= "a" && char <= "z";
  
    // Handle uppercase letters
    if (isUpperCase) {
      const base = "A".charCodeAt(0); // ASCII code for 'A'
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }
  
    // Handle lowercase letters
    if (isLowerCase) {
      const base = "a".charCodeAt(0); // ASCII code for 'a'
      return String.fromCharCode(((char.charCodeAt(0) - base + shift) % 26) + base);
    }
  
    // Non-alphabetic characters remain unchanged
    return char;
  }
  
  // Test Cases
  console.log(rotateCharacter("A", 3)); // Output: "D"
  console.log(rotateCharacter("F", 1)); // Output: "G"
  console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged)
  console.log(rotateCharacter("z", 1)); // Output: "a" (wraparound)
  console.log(rotateCharacter("Y", 2)); // Output: "A" (wraparound)
  