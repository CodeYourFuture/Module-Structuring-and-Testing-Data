// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("should return 0 occurence of a character", () => {
  const str = "happy";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: One occurrence
// Given an input string `str`,
// And a character `char` that occurs once within `str` (e.g., 'a' in 'boat'),
// When the function is called with these inputs,
// Then it should correctly return the count of `char` (e.g., 'a' appears once in 'boat').

test("should return 1 occurence of a character", () => {
  const str = "boat";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should return 0 occurrence of character in an empty string", () => {
  const str = "";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should throw an error when more than one string is passed as char", () => {
  const str = "jump";
  const char = "pp";
  const count = countChar(str, char);
  expect(count).toEqual("invalid input: Input just one character");
});


