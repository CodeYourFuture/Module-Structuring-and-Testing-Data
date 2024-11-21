// // The rotateCharacter function takes a character and a shift value as input.
// // If the character is a letter (either uppercase or lowercase),
// // it rotates the character by the specified shift value within the alphabet,
// // considering wrapping around if necessary. Non-letter characters are returned unchanged.

// // This function is commonly used for text encryption and decryption,
// // where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// // Acceptance criteria:

// // Given a character and a shift value,
// // When the function rotateCharacter is called with these inputs,
// // Then it should:

// // Scenario: Rotate Lowercase Letters:
// // Given a lowercase letter character and a positive integer shift,
// // When the function is called with these inputs,
// // Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
// console.log(rotateCharacter("a", 3)); // Output: "d"
// console.log(rotateCharacter("f", 1)); // Output: "g"

// // Scenario: Rotate Uppercase Letters:
// // Given an uppercase letter character and a positive integer shift,
// // When the function is called with these inputs,
// // Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
// console.log(rotateCharacter("A", 3)); // Output: "D"
// console.log(rotateCharacter("F", 1)); // Output: "G"

// // Scenario: Leave Non-Letter Characters Unchanged:
// // Given a character that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// // When the function is called with these inputs,
// // Then it should return the character unchanged.
// // This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
// console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// // Scenario: Shifting a Character with Wraparound
// // Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// // And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// // When the rotateCharacter function is called with char and shift as inputs,
// // Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// // And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
// console.log(rotateCharacter("z", 1)); // Output: "a" (preserves case, but wraps around)
// console.log(rotateCharacter("Y", 2)); // Output: "A" (preserves case, but wraps around)

function rotateCharacter(char, shift) {
  // If the character is a lowercase letter (a-z)
  if (char >= 'a' && char <= 'z') {
    // Find the position of the character in the alphabet (0 for 'a', 1 for 'b', etc.)
    let charPosition = char.charCodeAt(0) - 'a'.charCodeAt(0);

    // Apply the shift, and handle wraparound using modulo 26 (to stay within 0-25)
    let newCharPosition = (charPosition + shift) % 26;

    // If the new position is negative (for negative shifts), adjust it to be within 0-25
    if (newCharPosition < 0) {
      newCharPosition += 26;
    }

    // Convert the new position back to a character and return it
    return String.fromCharCode(newCharPosition + 'a'.charCodeAt(0));
  }

  // If the character is an uppercase letter (A-Z)
  if (char >= 'A' && char <= 'Z') {
    // Find the position of the character in the alphabet (0 for 'A', 1 for 'B', etc.)
    let charPosition = char.charCodeAt(0) - 'A'.charCodeAt(0);

    // Apply the shift, and handle wraparound using modulo 26 (to stay within 0-25)
    let newCharPosition = (charPosition + shift) % 26;

    // If the new position is negative (for negative shifts), adjust it to be within 0-25
    if (newCharPosition < 0) {
      newCharPosition += 26;
    }

    // Convert the new position back to a character and return it
    return String.fromCharCode(newCharPosition + 'A'.charCodeAt(0));
  }

  // If the character is not a letter, just return it unchanged
  return char;
}

// Test cases to check if the function works as expected
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)
console.log(rotateCharacter("z", 1)); // Output: "a" (wraps around)
console.log(rotateCharacter("Y", 2)); // Output: "A" (wraps around)


test("rotates lowercase letters correctly", function(){
    expect(rotateCharacter("a", 3)).toBe("d"); // 'a') -> 'd'
    expect(rotateCharacter("f", 1)).toBe("g"); // 'f' -> 'g'
    expect(rotateCharacter("z", 1)).toBe("a"); // Wraparound: 'z' -> 'a'
  });

  test("rotates uppercase letters correctly", function(){
    expect(rotateCharacter("A", 3)).toBe("D"); // 'A' -> 'D'
    expect(rotateCharacter("F", 1)).toBe("G"); // 'F' -> 'G'
    expect(rotateCharacter("Y", 2)).toBe("A"); // Wraparound: 'Y' -> 'A'
  });

  test("handles non-letter characters by returning them unchanged", function() {
    expect(rotateCharacter("7", 5)).toBe("7"); // Non-letter character
    expect(rotateCharacter("!", 3)).toBe("!"); // Non-letter character
    expect(rotateCharacter(" ", 10)).toBe(" "); // Non-letter character
  });

  test("handles negative shifts correctly", function(){
    expect(rotateCharacter("d", -3)).toBe("a"); // 'd' -> 'a'
    expect(rotateCharacter("g", -1)).toBe("f"); // 'g' -> 'f'
    expect(rotateCharacter("a", -1)).toBe("z"); // Wraparound: 'a' -> 'z'
    expect(rotateCharacter("A", -3)).toBe("X"); // 'A' -> 'X'
    expect(rotateCharacter("Z", -2)).toBe("X"); // 'Z' -> 'X'
  });

  test("handles large shift values correctly", function() {
    expect(rotateCharacter("a", 52)).toBe("a"); // 52 shifts (full rotations)
    expect(rotateCharacter("z", 53)).toBe("a"); // 53 shifts (wraps once)
    expect(rotateCharacter("A", 27)).toBe("B"); // 27 shifts (wraps once)
    expect(rotateCharacter("Y", 78)).toBe("Y"); // 78 shifts (multiple rotations)
  });

