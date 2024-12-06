// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character and a shift value,
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').

function rotateCharacter(char, shift) {
  //check if char is a lowercase letter
  if (char >= "a" && char <= "z") {
    //get the unicode of character `a`
    let start = "a".charCodeAt(0);
    console.log("unicode of character `a`: ", start);
    let offset = (char.charCodeAt(0) - start + shift) % 26;
    //convert unicode values to characters
    return String.fromCharCode(start + (offset >= 0 ? offset : offset + 26));
  }

  //check if character is an uppercase letter
  if (char >= "A" && char <= "Z") {
    //get the unicode of character "A"
    let start = "A".charCodeAt(0);
    console.log("unicode of character `A`: ", start);
    let offset = (char.charCodeAt(0) - start + shift) % 26;
    return String.fromCharCode(start + (offset >= 0 ? offset : offset + 26));
  }
  //if the char is not a letter, return it unchanged
  return char;
}

console.log("Rotate Lowercase Letters:", rotateCharacter("a", 3)); // Output: "d"

console.log("Rotate Lowercase Letters:", rotateCharacter("f", 1)); // Output: "g"

console.log("Rotate Uppercase Letters:", rotateCharacter("A", 3)); // Output: "D"

console.log("Rotate Uppercase Letters:", rotateCharacter("F", 1)); // Output: "G"

console.log("Leave Non-Letter Characters Unchanged: ", rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

console.log("preserves case, but wraps around: ", rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)

console.log("preserves case, but wraps around: ",rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)
