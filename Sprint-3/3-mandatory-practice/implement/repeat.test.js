const repeat = require("./repeat");

describe("repeat function tests", () => {

  test("repeats string given number of times", () => {
    expect(repeat("hi", 3)).toBe("hihihi");
    expect(repeat("abc", 2)).toBe("abcabc");
  });

  test("returns empty string when count is 0", () => {
    expect(repeat("hello", 0)).toBe("");
  });

  test("throws error if count is negative", () => {
    expect(() => repeat("hi", -1)).toThrow("Count must be non-negative");
  });

});
