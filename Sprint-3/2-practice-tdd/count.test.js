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
test("should return 0 if the character does not exist in the string", () => {
  expect(countChar("hello", "z")).toEqual(0);
});

// Scenario: Single Occurrence
// Given the input string str,
// And a character char that occurs exactly once in str,
// When the function is called with these inputs,
// Then it should return 1, indicating one occurrence of char in str.
test("should count a single occurrence of a character", () => {
  expect(countChar("hello", "h")).toEqual(1);
});

// Scenario: Empty String
// Given an empty input string str,
// And any character char,
// When the function is called with these inputs,
// Then it should return 0, as there are no characters to count.
test("should return error if the string is empty", () => {
  expect(countChar("", "a")).toEqual("Error: The string cannot be empty.");
});

// Scenario: Case Sensitivity
// Given the input string str containing both uppercase and lowercase versions of a letter,
// And a character char that matches only one case (either uppercase or lowercase),
// When the function is called with these inputs,
// Then it should count only the occurrences matching the exact case of char.
test("should count only characters that match the exact case", () => {
  const str = "AaAaA";
  const lowercaseResult = countChar(str, "a"); // lowercase only
  const uppercaseResult = countChar(str, "A"); // uppercase only
  expect(lowercaseResult).toEqual(2); // Only lowercase 'a's
  expect(uppercaseResult).toEqual(3); // Only uppercase 'A's
});

// Scenario: Special Characters
// Given the input string str containing special or non-alphabetic characters,
// And a character char that matches one of those special characters,
// When the function is called with these inputs,
// Then it should return the number of times that special character occurs in str.
test("should count special characters", () => {
  expect(countChar("!?!?", "?")).toEqual(2);
});

// Scenario: Spaces
// Given the input string str that contains space characters,
// And a character char that is a space,
// When the function is called with these inputs,
// Then it should return the number of space characters in str.
test("should count spaces correctly", () => {
  expect(countChar("a b c", " ")).toEqual(2);
});

// Scenario: Null or Undefined Input (Optional Defensive Case)
// Given a null or undefined input string str,
// And a character char,
// When the function is called with these inputs,
// Then it should safely return 0 instead of throwing an error.
test("should return error if the string is null or undefined", () => {
  expect(countChar(null, "a")).toEqual(
    "Error: The input string cannot be null or undefined."
  );
  expect(countChar(undefined, "a")).toEqual(
    "Error: The input string cannot be null or undefined."
  );
});

// Scenario: Character Not a Single Character (Optional Defensive Case)
// Given the input string str,
// And a character char that is either an empty string or has more than one character,
// When the function is called with these inputs,
// Then it should return an error indicating that char must be a single character.
test("should return error if the character to count is not a single character", () => {
  expect(countChar("hello", "")).toEqual(
    "Error: The character to count must be a single character."
  );
  expect(countChar("hello", "ll")).toEqual(
    "Error: The character to count must be a single character."
  );
});

// Scenario: Unicode Characters
// Given the input string str containing Unicode characters (e.g., emojis),
// And a character char that is a Unicode character,
// When the function is called with these inputs,
// Then it should return the number of times that Unicode character occurs in str.
test("should count unicode characters correctly", () => {
  expect(countChar("😀😃😀😄", "😀")).toEqual(2);
});
// Scenario: Long Strings
// Given a very long input string str,
// And a character char that occurs multiple times in str,
// When the function is called with these inputs,
// Then it should efficiently return the correct count of char in str.
test("should handle long strings efficiently", () => {
  const longString = "a".repeat(10000) + "b".repeat(5000) + "a".repeat(3000);
  expect(countChar(longString, "a")).toEqual(13000);
});
