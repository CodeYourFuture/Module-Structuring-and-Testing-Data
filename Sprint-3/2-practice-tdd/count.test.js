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

test("should return 0 when character does not exist in string", () => {
  const str = "Code Your Future";
  const char = "g";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty string 

test("should return 0 when string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: String is a space

test("should return 0 when string is space", () => {
  const str = "   ";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: String is 

// Scenario: Empty character

test("should return 0 when character is empty", () => {
  const str = "my code";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: char is empty character

test("should return 0 when character is empty string ", () => {
  const str = "my code";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});



// Scenario: charcter not string 

