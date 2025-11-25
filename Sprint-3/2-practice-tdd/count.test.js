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

test("should return 5 when counting 'a' in 'aaaaa'", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
});

test("should return 1 when counting 'b' in 'abc'", () => {
  expect(countChar("abc", "b")).toEqual(1);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should return 0 when counting 'z' in 'hello'", () => {
  expect(countChar("hello", "z")).toEqual(0);
});

test("should return 0 when counting any character in an empty string", () => {
  expect(countChar("", "a")).toEqual(0);
});
