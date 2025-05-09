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
// Test Case 2: No Occurrences
test("should return 0 for no occurrences of a character", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Test Case 3: Single Occurrence
test("should return 1 when a character occurs once", () => {
  const str = "hello";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Test Case 4: Case Sensitivity
test("should be case-sensitive when counting characters", () => {
  const str = "Hello";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(0); // 'h' is different from 'H'
});

// Test Case 5: Empty String
test("should return 0 when the string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
