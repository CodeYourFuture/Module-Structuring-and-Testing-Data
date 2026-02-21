// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("should return 0 when character does not appear in string", () => {
  expect(countChar("hello", "x")).toEqual(0);
  expect(countChar("banana", "z")).toEqual(0);
  // empty string
  expect(countChar("", "a")).toEqual(0);
});

// Scenario: Single Occurence
// Given a string where `char` appears exactly once,
// When countChar is called,
// Then it should return 1.
test("should return 1 when character appears exactly once", () => {
  expect(countChar("hello", "h")).toEqual(1);
  expect(countChar("test", "e")).toEqual(1);
  expect(countChar("xyz", "y")).toEqual(1);
});

// Scenario: Case Sensitivity
// Given a string with mixed case letters, 
// When countChar is called with a specific case,
// Then it should count only exact matches (case-sensitive).
test("should be case-sensitive when counting characters", () => {
  expect(countChar("Hello", "H")).toEqual(1);
  expect(countChar("Hello", "h")).toEqual(0);
  expect(countChar("AAAaaa", "A")).toEqual(3);
  expect(countChar("AAAaaa", "a")).toEqual(3);
});

// Scenario: Special Characters/Symbols
// Given a string containing punctuation or emojis,
// When counting a special character,
// Then it should correctly identify and count it.
test("should count special characters and emojis", () => {
  expect(countChar("hello!!!", "!")).toEqual(3);
  expect(countChar("smile 😊😊😊", "😊")).toEqual(3);
});

// Scenario: Longer Mixed String
// Given a longer string with various characters and spaces,
// When counting different characters,
// Then it should return the correct count for each.
test("should count correctly in longer mixed string", () => {
  const str = "i am writing some jest tests right now";
  // some, now
  expect(countChar(str, "o")).toEqual(2);
  // some, jest, tests
  expect(countChar(str, "e")).toEqual(3);
  // spaces
  expect(countChar(str, " ")).toEqual(7);
});

// Scenario: Single Character String
// Given a string containing only one character,
// When countChar is called,
// Then it should correctly handle matching or non-matching cases.
test("should handle single character strings", () => {
  expect(countChar("a", "a")).toEqual(1);
  expect(countChar("b", "a")).toEqual(0);
});
