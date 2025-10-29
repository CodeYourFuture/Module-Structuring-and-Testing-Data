// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

const countChar = require("./count");

// Grouped tests for standard character counting
test.each([
  ["a", "aaaaa", 5],
  ["l", "hello", 2],
  ["a", "javascript", 2],
  ["z", "hello", 0],
  ["h", "hello", 1],
  ["o", "hipopotamos' make wonderful pets", 3],
  ["p", "hipopotamos", 1],
  ["t", "hipopotamos' are a friendly animal", 1],
  ["x", "hipopotamos", 0],
  ["i", "Pneumonoultramicroscopicsilicovolcanoconiosis", 6],
])("should count occurrences of character '%s' in string '%s'", (char, str, expected) => {
  expect(countChar(str, char)).toEqual(expected);
});

// Edge case: empty string
test("should return error if the string is empty", () => {
  expect(countChar("", "a")).toEqual("Error: The string cannot be empty.");
});

// Edge case: null or undefined string
test("should return error if the string is null or undefined", () => {
  expect(countChar(null, "a")).toEqual("Error: The input string cannot be null or undefined.");
  expect(countChar(undefined, "a")).toEqual("Error: The input string cannot be null or undefined.");
});

// Edge case: invalid character input
test("should return error if the character to count is not a single character", () => {
  expect(countChar("hello", "")).toEqual("Error: The character to count must be a single character.");
  expect(countChar("hello", "ll")).toEqual("Error: The character to count must be a single character.");
  expect(countChar("hello", null)).toEqual("Error: The character to count must be a single character.");
  expect(countChar("hello", undefined)).toEqual("Error: The character to count must be a single character.");
});

// Case sensitivity
test("should count only characters that match the exact case", () => {
  const str = "AaAaA";
  expect(countChar(str, "a")).toEqual(2); // lowercase only
  expect(countChar(str, "A")).toEqual(3); // uppercase only
});

// Special characters
test("should count special characters", () => {
  expect(countChar("!?!?", "?")).toEqual(2);
});

// Spaces
test("should count spaces correctly", () => {
  expect(countChar("a b c", " ")).toEqual(2);
});

// Unicode characters
test("should count unicode characters correctly", () => {
  expect(countChar("😀😃😀😄", "😀")).toEqual(2);
});

// Long strings
test("should handle long strings efficiently", () => {
  const longString = "a".repeat(10000) + "b".repeat(5000) + "a".repeat(3000);
  expect(countChar(longString, "a")).toEqual(13000);
});
