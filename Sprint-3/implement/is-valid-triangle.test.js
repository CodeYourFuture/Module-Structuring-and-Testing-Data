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
