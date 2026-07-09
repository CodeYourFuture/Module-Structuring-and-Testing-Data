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

test("should count multiple occurrences of a character", () => {
  const str = "Code your Future";
  const char = "u";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count multiple occurrences of a character", () => {
  const str = "Introduction to Programming";
  const char = "o";
  const count = countChar(str, char);
  expect(count).toEqual(4);
});

test("should count multiple occurrences of a character", () => {
  const str = "Introduction to Javascript";
  const char = "i";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});
// Scenario: No Occurrences
test("should return 0 when the character does not occur in the string", () => {
  const str = "No occurrences here";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
// for empty string scenario.
test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
//Scenario: for empty find character.
test("should return 0 when the find character is empty", () => {
  const str = "empty find character";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
// Scenario: counting empty spaces in a string.
test("should return the count of empty spaces in a string", () => {
  const str = "The quick brown fox jumps over the lazy dog";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(8);
});
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
