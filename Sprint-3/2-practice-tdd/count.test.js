// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:  correctly count the occurrences of char in str.


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

test("should return 0 for no occurrences", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});


// Scenario: Multiple occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No occurrences
test("should return 0 for no occurrences", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty string
test("should return 0 when input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty character
test("should return 0 when character input is empty", () => {
  const str = "hello";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Character longer than 1
test("should return 0 when character input is longer than one character", () => {
  const str = "hello";
  const char = "ll";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: char string longer than str string
test("should return 0 when char is longer than the input string", () => {
  const str = "a";
  const char = "abc";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Non-string inputs
test("should return 0 when inputs are not strings", () => {
  expect(countChar(12345, "1")).toEqual(0);
  expect(countChar("12345", 1)).toEqual(0);
  expect(countChar(null, "a")).toEqual(0);
  expect(countChar("hello", undefined)).toEqual(0);
});

// Scenario: Case sensitivity
test("should count only exact case matches", () => {
  const str = "AaAaA";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// Scenario: Spaces and special characters
test("should correctly count spaces and symbols", () => {
  const str = "a b c d e ! !";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(6);
});
