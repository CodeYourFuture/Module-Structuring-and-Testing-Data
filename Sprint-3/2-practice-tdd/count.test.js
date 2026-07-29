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

test("The function should return the number of times a character appears ", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});
test("The function should return the number of times a character appears", () => {
  const str = "hello";
  const char = "l";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
test("The function should return the number of times a character appears", () => {
  const str = "speed";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
test("the function should return 0 when there are no appears of the character", () => {
  const str = "kkkk";
  const char = "l";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("the function should return 0 when there are no appears of the character", () => {
  const str = "bbbb";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
test("the function should return 0 when there are no appears of the character", () => {
  const str = "mmmmmzmze";
  const char = "d";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
