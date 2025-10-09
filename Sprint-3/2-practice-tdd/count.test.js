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
  expect(parseInt(count)).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should return 0 when character does not exist in the string", () => {
  const str = "abcdefg";
  const char = "h";
  const count = countChar(str, char);
  expect(parseInt(count)).toEqual(0);
});

// test for empty string
test("should return 0 when string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(parseInt(count)).toEqual(0);
});

// tests for unhappy paths (invalid str)
const errorMessageForString = "Input str should be a string";

// test for str is an array
test("should throw an error when str is an array", () => {
  const str = ["a", "b", "c"];
  const char = "a";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// test for str is a number
test("should throw an error when str is a number", () => {
  const str = 12345;
  const char = "1";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// test for str is an object
test("should throw an error when str is an object", () => {
  const str = { a: 1, b: 2 };
  const char = "a";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// test for str is null
test("should throw an error when str is null", () => {
  const str = null;
  const char = "a";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// test for str is undefined
test("should throw an error when str is undefined", () => {
  const str = undefined;
  const char = "a";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// test for str is a boolean
test("should throw an error when str is a boolean", () => {
  const str = true;
  const char = "a";
  expect(() => countChar(str, char)).toThrow(errorMessageForString);
});

// tests for unhappy paths (invalid char)
const errorMessageForCharacter = "Input char should be a string";

// test for char is an array
test("should throw an error when char is an array", () => {
  const str = "abcdefg";
  const char = ["a", "b"];
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is a number
test("should throw an error when char is a number", () => {
  const str = "abcdefg";
  const char = 1;
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is an object
test("should throw an error when char is an object", () => {
  const str = "abcdefg";
  const char = { a: 1 };
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is null
test("should throw an error when char is null", () => {
  const str = "abcdefg";
  const char = null;
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is undefined
test("should throw an error when char is undefined", () => {
  const str = "abcdefg";
  const char = undefined;
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is a boolean
test("should throw an error when char is a boolean", () => {
  const str = "abcdefg";
  const char = true;
  expect(() => countChar(str, char)).toThrow(errorMessageForCharacter);
});

// test for char is more than one character
const errorMessageForSingleCharacter =
  "Input char should be a single character";

test("should throw an error when char is more than one character", () => {
  const str = "abcdefg";
  const char = "ab";
  expect(() => countChar(str, char)).toThrow(errorMessageForSingleCharacter);
});

// test for char is a space character
test("should return 0 when char is a space character", () => {
  const str = "abcdefg";
  const char = " ";
  const count = countChar(str, char);
  expect(parseInt(count)).toEqual(0);
});

// test for str is a space character
test("should return 0 when str is a space character", () => {
  const str = "       ";
  const char = "a";
  const count = countChar(str, char);
  expect(parseInt(count)).toEqual(0);
});

//test for char is an empty string
test("should throw an error when char is an empty string", () => {
  const str = "abcdefg";
  const char = "";
  expect(() => countChar(str, char)).toThrow(errorMessageForSingleCharacter);
});
