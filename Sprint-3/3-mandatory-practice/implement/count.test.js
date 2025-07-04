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

// Scenario 1: Multiple occurrences
test("should count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
});

// Scenario 2: No occurrences
test("should return 0 when the character is not found", () => {
  expect(countChar("hello", "z")).toEqual(0);
});

// Scenario 3: Case sensitivity
test("should be case-sensitive", () => {
  expect(countChar("Millena", "m")).toEqual(0); // lowercase 'm' not present
  expect(countChar("Millena", "M")).toEqual(1); // uppercase 'M' present
});

// Scenario 4: Count spaces
test("should count spaces as characters", () => {
  expect(countChar("Millena Mesfin", " ")).toEqual(1);
});

// Scenario 5: Empty string
test("should return 0 for an empty string", () => {
  expect(countChar("", "m")).toEqual(0);
});

// Scenario 6: Show it counts 'm' but ignores 'M'
test("should count only lowercase 'm'", () => {
  const str = "mMmmMmmM";
  expect(countChar(str, "m")).toEqual(5); // 4 lowercase
  expect(countChar(str, "M")).toEqual(3); // 4 uppercase
});