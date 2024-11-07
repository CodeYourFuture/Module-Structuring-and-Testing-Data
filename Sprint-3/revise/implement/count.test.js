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

// Test cases
const countChar = require("./count"); // Adjust the path to where your function is defined

describe("countChar", () => {
  it("should return the correct count for a character that appears multiple times", () => {
    expect(countChar("hello", "l")).toBe(2); // 'l' appears twice in "hello"
  });

  it("should return 0 when the character does not appear in the string", () => {
    expect(countChar("hello", "z")).toBe(0); // 'z' does not appear in "hello"
  });

  it("should return 0 when the string is empty", () => {
    expect(countChar("", "a")).toBe(0); // No characters to count in an empty string
  });

  it("should return the correct count for a single character string", () => {
    expect(countChar("a", "a")).toBe(1); // 'a' appears once in "a"
  });

  it("should return the correct count for special characters", () => {
    expect(countChar("!@#$%", "$")).toBe(1); // '$' appears once in "!@#$%"
  });

  it("should return the correct count for uppercase and lowercase characters", () => {
    expect(countChar("AaaAAa", "a")).toBe(3); // 'a' appears 3 times in "AaaAAa"
  });
});
