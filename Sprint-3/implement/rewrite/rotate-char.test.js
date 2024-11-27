const rotateCharacter = require("./rotate-char");

describe("Rotate Characters", () => {
  it("should rotate lowercase letters", () => {
    expect(rotateCharacter("a", 3)).toEqual("d");
    expect(rotateCharacter("f", 1)).toEqual("g");
  });
  it("should rotate uppercase letters", () => {
    expect(rotateCharacter("A", 3)).toEqual("D");
    expect(rotateCharacter("F", 1)).toEqual("G");
  });
  it("should leave non-letter characters unchanged", () => {
    expect(rotateCharacter("7", 5)).toEqual("7");
  });
  it("should handle wraparound for lowercase and uppercase letters", () => {
    expect(rotateCharacter("z", 1)).toEqual("a");
    expect(rotateCharacter("Y", 2)).toEqual("A");
  });
});
