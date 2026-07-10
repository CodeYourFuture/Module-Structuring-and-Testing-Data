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

// to solve this issue, we will implement a test case that checks for the scenario where the character is not found in the string.
// The test will call the countChar function with a string and a character that does not exist in that string, and it will assert that the returned count is 0.
//  here is the code for the test case:
test("should return 0 when character is not found", () => {
  const str = "hello";
  const char = "x";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
