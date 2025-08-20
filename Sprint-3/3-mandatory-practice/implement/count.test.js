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

test("should return 0 if character does not occur", () => {
  const str = "Hello World";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should be case sensitive", () => {
  const str = "Hello World";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(0);
  
  const uppercaseCount = countChar(str, "H");
  expect(uppercaseCount).toEqual(1);
});

test("should count spaces as characters", () => {
  const str = "Hello World";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(1);
  
  const multiSpaceStr = "Hello  World  !";
  const multiSpaceCount = countChar(multiSpaceStr, " ");
  expect(multiSpaceCount).toEqual(4);
});
