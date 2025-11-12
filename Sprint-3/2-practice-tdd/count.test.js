// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').
 
const countChar = require('./count');


test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});
test("should return 0 when the character is not found", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Case Sensitivity
// It should be case-sensitive, meaning 'A' != 'a'.
test("should be case-sensitive when counting characters", () => {
  const str = "Banana";
  expect(countChar(str, "a")).toEqual(3);
  expect(countChar(str, "A")).toEqual(0);
});

// Scenario: Empty String
// It should return 0 when the input string is empty.
test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Special Characters
// It should correctly count spaces and punctuation.
test("should count special characters like spaces or punctuation", () => {
  expect(countChar("a b a b", " ")).toEqual(3);
  expect(countChar("wow!!!", "!")).toEqual(3);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
