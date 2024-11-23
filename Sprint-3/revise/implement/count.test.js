// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

const countChar = require("./count");

describe("countChar", () => {
  test("counts occurrences of a character in a string", () => {
    expect(countChar("aaaaa", "a")).toBe(5);
    expect(countChar("banana", "a")).toBe(3);
  });

  test("returns 0 when the character is not in the string", () => {
    expect(countChar("hello", "z")).toBe(0);
  });

  test("is case-sensitive", () => {
    expect(countChar("world", "W")).toBe(0);
  });

  test("returns 0 for an empty string", () => {
    expect(countChar("", "a")).toBe(0);
  });

  test("returns 0 if the character is an empty string", () => {
    expect(countChar("aaaaa", "")).toBe(0);
  });

  test("handles special characters", () => {
    expect(countChar("!@#$$%^^&", "$")).toBe(2);
  });
});
