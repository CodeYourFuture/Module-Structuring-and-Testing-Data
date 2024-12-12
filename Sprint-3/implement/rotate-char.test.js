const rotateCharacter = require("./rotate-char");

describe("rotateCharacter Tests", () => {
  it("Rotate Lowercase Letters", () => {
    expect(rotateCharacter("a", 3)).toBe("d");
    expect(rotateCharacter("f", 1)).toBe("g");
  });

  it("Rotate Uppercase Letters", () => {
    expect(rotateCharacter("A", 3)).toBe("D");
    expect(rotateCharacter("F", 1)).toBe("G");
  });

  it("Leave Non-Letter Characters Unchanged", () => {
    expect(rotateCharacter("7", 5)).toBe("7");
    expect(rotateCharacter("?", 5)).toBe("?");
  });

  it("Shifting a Character with Wraparound", () => {
    expect(rotateCharacter("z", 1)).toBe("a");
    expect(rotateCharacter("Y", 2)).toBe("A");
  });
});
