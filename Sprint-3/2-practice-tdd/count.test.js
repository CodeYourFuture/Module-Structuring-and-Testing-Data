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

test("should return 0 when character is not found", () => {
  const str = "hello";
  const char = "x";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Case : case-sensitivity expectations 
// Test for when the alphabets are of different  case 
test("should be case-sensitive when matching characters", () => {
  expect(countChar("AaA", "A")).toEqual(2); // uppercase A occurrences
  expect(countChar("AaA", "a")).toEqual(1); // lowercase a occurrences
});
