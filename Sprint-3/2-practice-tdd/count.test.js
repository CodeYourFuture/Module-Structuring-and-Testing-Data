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

test("should count multiple occurrences of a character", () => {
  const str = "bbb";
  const char = "b";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

test("should count mutiple of character 'coco can have coconut'", () => {
  const str = "coco can have coconut";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should count multiple occurrences of a character 'a' in 'I have an apple'", () => {
  const str = "I have an apple";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should return 0 when the character does not exist in the string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 when the character does not exist in the string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 when the 'c' does not exist in string 'I dont have an apple'", () => {
  const str = "I dont have an apple";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
