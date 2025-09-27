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

test("should return 0 when character does not exist in the string", () => {
  const str = "mnopqrst";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// we can add more test cases to make sure our function is working as expected
// Scenario: Case Sensitivity
// Given the input string str,
// And a character char that exists in str but with different casing (e.g., 'A' in 'aAaAa'),
// When the function is called with these inputs,
// Then it should treat char as case-sensitive and only count occurrences that match the exact casing (e.g., 'A' appears two times in 'aAaAa').

test("should treat character as case-sensitive", () => {
  const str = "aAaAa";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(2);
});

// we can also add empty string test case
// Scenario: Empty String
// Given an empty input string str,
// And any character char,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of char can be found in an empty str.

test("should return 0 for empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// We can run this test file using the command `npx jest count.test.js`
// in the terminal. Making sure we are in the directory where this file is located.
// If we have Jest installed globally, you can simply run `jest count.test.js`
// instead. If you have added a test script to your package.json file, you can also run
// `npm test count.test.js` to execute the tests.