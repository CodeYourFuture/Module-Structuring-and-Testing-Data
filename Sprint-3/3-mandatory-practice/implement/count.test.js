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
  let count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should count multiple occurrences of l character", () => {
  const str = "hello";
  const char = "l";
  let count = countChar(str, char);
  expect(count).toEqual(2);
});

test("should return 0 if because of case-sensitivity",() =>{
  const str = "Car";
  const char = "c";
  const count = countChar(str,char);
  expect(count).toEqual(0);
});


test("should return 0 if character does not appears",() =>{
  const str = "apple";
  const char = "c";
  const count = countChar(str,char);
  expect(count).toEqual(0);
});

test("should return 0 if character is empty string",() =>{
  const str = "apple";
  const char = "";
  const count = countChar(str,char);
  expect(count).toEqual(0);
});