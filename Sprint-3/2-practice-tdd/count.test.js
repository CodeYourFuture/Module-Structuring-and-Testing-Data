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
test("returns 0 when the character does not exist in the string", () => {
  const str = "The character have no match";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
// Scenario: 1 Occurrences
// Given the input string `str`,
// And a character `char` that have 1 character exist in `str`.
// When the function is called with these inputs,
// Then it should return 1, indicating that 1 occurrences of `char` were found.
test("returns 1 when the character appears once in the string", () => {
  const str = "code your future";
  const char = "f";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});
