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
test(`should return zero the character doesn't exist in the string`, () => {
  const str = "bravo";
  const char = "u";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Empty String
test(`should return zero when the string is empty`, () => {
  expect(countChar("", "a")).toEqual(0);
});

// Scenario: Multiple Occurrences
test("should count multiple occurrences of characters (including mixed and case-sensitive)", () => {
  expect(countChar("aaaaa", "a")).toEqual(5); // simple multiple
  expect(countChar("1-2-3-4-5-", "-")).toEqual(5); // mixed characters
  expect(countChar("AaAa", "A")).toEqual(2); // case sensitivity
});

// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
