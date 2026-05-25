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

// test for Scenario "No Occurrences" — char isn't in the string, expect 0
test("should return 0 when the character is not found", () => {
  const str = "fiendish";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// extra edge case — counts 's' in "Mississippi" (should be 4)
// Good real-world style input to make sure the loop works across a longer string.
test("should count occurrences correctly in a mixed string", () => {
  const str = "Apple";
  const char = "p";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
