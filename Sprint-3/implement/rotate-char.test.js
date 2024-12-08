const rotateCharacter = require("./rotate-char.js")


// test for lower case letters.
test("should rotate lowercase letters correctly with positive shift'", () => {
    expect(rotateCharacter("a", 3)).toBe("d");
    expect(rotateCharacter('f', 1)).toBe('g');
    expect(rotateCharacter('z', 1)).toBe('a');
    expect(rotateCharacter('y', 2)).toBe('a');;  
  });

  test("should rotate lowercase letters correctly with negative shift", () => {
    expect(rotateCharacter('a', -1)).toBe('z');
    expect(rotateCharacter('b', -1)).toBe('a');
    expect(rotateCharacter('z', -3)).toBe('w');
  });

  // test for uppercase letters.
  it("should rotate uppercase letters correctly with positive shift", () => {
    expect(rotateCharacter('A', 3)).toBe('D');
    expect(rotateCharacter('F', 1)).toBe('G');
    expect(rotateCharacter('Z', 1)).toBe('A');
    expect(rotateCharacter('Y', 2)).toBe('A');
  });

  it("should rotate uppercase letters correctly with negative shift", () => {
    expect(rotateCharacter('A', -1)).toBe('Z');
    expect(rotateCharacter('B', -1)).toBe('A');
    expect(rotateCharacter('Z', -3)).toBe('W');
  });
