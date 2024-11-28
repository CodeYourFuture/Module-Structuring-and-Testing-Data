const rotateCharacter = require("./rotate-char"); // Assuming the function is in 'is-valid-triangle.js'

describe("rotateCharacter", () => {
  // Test Case 1: Rotate a lowercase letter by a positive shift
  it("should rotate a lowercase letter by a positive shift", () => {
    expect(rotateCharacter("a", 3)).toBe("d"); // "a" -> "d"
    expect(rotateCharacter("f", 1)).toBe("g"); // "f" -> "g"
  });

  // Test Case 2: Rotate an uppercase letter by a positive shift
  it("should rotate an uppercase letter by a positive shift", () => {
    expect(rotateCharacter("A", 3)).toBe("D"); // "A" -> "D"
    expect(rotateCharacter("F", 1)).toBe("G"); // "F" -> "G"
  });

  // Test Case 3: Rotate a lowercase letter with wraparound
  it("should rotate a lowercase letter with wraparound", () => {
    expect(rotateCharacter("z", 1)).toBe("a"); // "z" -> "a"
    expect(rotateCharacter("y", 2)).toBe("a"); // "y" -> "a"
  });

  // Test Case 4: Rotate an uppercase letter with wraparound
  it("should rotate an uppercase letter with wraparound", () => {
    expect(rotateCharacter("Z", 1)).toBe("A"); // "Z" -> "A"
    expect(rotateCharacter("Y", 2)).toBe("A"); // "Y" -> "A"
  });

  // Test Case 5: Leave non-letter characters unchanged
  it("should leave non-letter characters unchanged", () => {
    expect(rotateCharacter("7", 5)).toBe("7"); // "7" (non-letter)
    expect(rotateCharacter("!", 3)).toBe("!"); // "!" (non-letter)
    expect(rotateCharacter(" ", 10)).toBe(" "); // " " (space, non-letter)
  });

  // Test Case 6: Rotate a character with a negative shift
  it("should rotate a character with a negative shift", () => {
    expect(rotateCharacter("b", -2)).toBe("z"); // "b" -> "z"
    expect(rotateCharacter("D", -3)).toBe("A"); // "D" -> "A"
  });

  // Test Case 7: Handle large shifts that wrap multiple times
  it("should handle large shifts that wrap multiple times", () => {
    expect(rotateCharacter("a", 30)).toBe("e"); // 30 mod 26 = 4 -> "a" -> "e"
    expect(rotateCharacter("Z", 55)).toBe("W"); // 55 mod 26 = 3 -> "Z" -> "W"
  });
});
