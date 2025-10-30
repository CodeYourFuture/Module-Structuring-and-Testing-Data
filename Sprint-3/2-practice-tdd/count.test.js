// implement a function countChar that counts the number of times a character occurs in a string
// const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

const countChar = require("./count");

describe("countChar - Standard character counting", () => {
  test.each([
    ["aaaaa", "a", 5],
    ["hello", "l", 2],
    ["javascript", "a", 2],
    ["hello", "z", 0],
    ["hello", "h", 1],
    ["hipopotamos' make wonderful pets", "o", 4],
    ["hipopotamos", "p", 2],
    ["hipopotamos' are friendly animals", "t", 1],
    ["hipopotamos", "x", 0],
    ["Pneumonoultramicroscopicsilicovolcanoconiosis", "i", 6],
  ])("should count occurrences of '%s' in '%s'", (input, char, expected) => {
    expect(countChar(input, char)).toBe(expected);
  });
});

describe("countChar - Edge cases", () => {
  test("should return 0 for empty string", () => {
    expect(countChar("", "a")).toBe(0);
  });

  test("should return 0 when character is not found", () => {
    expect(countChar("abcdef", "z")).toBe(0);
  });

  test("should handle special characters", () => {
    expect(countChar("!@#$%^&*", "&")).toBe(1);
  });

  test("should be case-sensitive", () => {
    expect(countChar("AaAaA", "a")).toBe(2);
    expect(countChar("AaAaA", "A")).toBe(3);
  });

  test("should handle numeric characters", () => {
    expect(countChar("123123123", "2")).toBe(3);
  });

  test("should handle whitespace characters", () => {
    expect(countChar("a b c d e", " ")).toBe(4);
  });
});

describe("countChar - Input validation", () => {
  test("should throw error if input string is null", () => {
    expect(() => countChar(null, "a")).toThrow(
      "The input string cannot be null or undefined."
    );
  });

  test("should throw error if input string is undefined", () => {
    expect(() => countChar(undefined, "a")).toThrow(
      "The input string cannot be null or undefined."
    );
  });

  test("should throw error if input string is not a string", () => {
    expect(() => countChar(12345, "a")).toThrow(
      "The input string must be a string type."
    );
  });

  test("should throw error if findCharacter is null", () => {
    expect(() => countChar("abc", null)).toThrow(
      "The character to count must be a single character string."
    );
  });

  test("should throw error if findCharacter is undefined", () => {
    expect(() => countChar("abc", undefined)).toThrow(
      "The character to count must be a single character string."
    );
  });

  test("should throw error if findCharacter is not a string", () => {
    expect(() => countChar("abc", 1)).toThrow(
      "The character to count must be a single character string."
    );
  });

  test("should throw error if findCharacter is an empty string", () => {
    expect(() => countChar("abc", "")).toThrow(
      "The character to count must be a single character string."
    );
  });

  test("should throw error if findCharacter is more than one character", () => {
    expect(() => countChar("abc", "ab")).toThrow(
      "The character to count must be a single character string."
    );
  });
});
