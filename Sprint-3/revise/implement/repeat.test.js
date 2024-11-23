// repeat.test.js
const repeat = require('./repeat');

describe("repeat function", () => {
  test("repeat String: repeats the string multiple times", () => {
    const result = repeat("abc", 3);
    expect(result).toBe("abcabcabc");
  });

  test("handle Count of 1: returns the original string without repetition", () => {
    const result = repeat("abc", 1);
    expect(result).toBe("abc");
  });

  test("handle Count of 0: returns an empty string", () => {
    const result = repeat("abc", 0);
    expect(result).toBe("");
  });

  test("Negative Count: throws an error for negative count", () => {
    expect(() => repeat("abc", -1)).toThrow("Count cannot be negative");
  });
});
