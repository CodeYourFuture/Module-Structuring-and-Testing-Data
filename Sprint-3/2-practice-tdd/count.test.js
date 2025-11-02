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

test("should return 0 when the 'c' does not exist in string 'I dont have an apple'", () => {
  const str = "I dont have an apple";
  const char = "c";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Find character is longer than the input string
// Given a string shorter than the findCharacter (e.g., 'a' vs 'abc'),
// When the function is called,
// Then it should return 0 because a multi-character string cannot match a single character position.

test("should return a message  when findCharacter is longer than the input string", () => {
  const str = "a";
  const char = "abc";
  const count = countChar(str, char);
  expect(count).toEqual(
    "the stringOfCharacters MUST be lonegr than findingcharacter"
  );
});

// Scenario: Empty string input
// Given an empty input string and a valid character,
// When the function is called,
// Then it should return 0 because there are no characters to search.

test("should return a Message  when input stringOfCharacters is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual("stringOfCharacters can not be empty");
});

// Scenario: Empty findCharacter
// Given a valid string but an empty findCharacter,
// When the function is called,
// Then it should return 0 because an empty search target is not valid.

test("should return message  when findCharacter is an empty string", () => {
  const str = "hello";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual("findCharacter can not be empty");
});

// Scenario: Non-string input type
// Given that one or both inputs are not strings (e.g., number, array),
// When the function is called,
// Then it should return 0 or handle the input gracefully without throwing an error.

test("should return message when inputs are numbers", () => {
  const str = 12345;
  const char = 1;
  const count = countChar(str, char);
  expect(count).toEqual("Values Can not be Numbers");
});
