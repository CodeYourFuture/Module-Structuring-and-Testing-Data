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
test("should return 0 when the character is not in the string", () => {
  const str = "hello";
  const char = "x";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Case Sensitivity

test("should be case-sensitive when counting characters", () => {
  const str = "Banana";
  expect(countChar(str, "a")).toEqual(3);
  expect(countChar(str, "A")).toEqual(0);
});

// Scenario: Empty String

test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario : Special characters

test("should count special characters like spaces or punctuation", () => {
  const str1 = "a b a b";
  const char1 = " ";
  expect(countChar(str1, char1)).toEqual(3);

  const str2 = "NO !!!";
  const char2 = "!";
  expect(countChar(str2, char2)).toEqual(3);
});

// Scenario: Numeric characters inside string

test("should count numeric characters inside the string", () => {
  const str3 = "123321";
  const char3 = "2";
  expect(countChar(str3, char3)).toEqual(2);
});

// Scenarion Accented characters

test("should count accented characters and unicode properly", () => {
  const str4 = "café";
  const char4 = "é";
  expect(countChar(str4, char4)).toEqual(1);
  });

// Scenario: Invalid inputs

test("should throw error for invalid string input", () => {
  expect(() => countChar(123, "a")).toThrow("Input should be a string");
});

test("should throw error for invalid character input", () => {
  expect(() => countChar("hello", "ab")).toThrow("Input must be a single character");
});


// Added different cases and test using npx jest  

// Added some tests, additional test and passed the tests.  