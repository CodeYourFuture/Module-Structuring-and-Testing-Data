// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario 1: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario 2: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.

test("should return 0 if there are no occurrences of a character", () => {
  const str = "there is no two number here";
  const char = "2";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario 3: Single Occurrence
// Given the input string `str`,
// And a character `char` that exists only once within `str`.
// When the function is called with these inputs,
// Then it should return 1, indicating that single occurrence of `char` were found.

test("should return 1 if there is single occurrence of a character", () => {
  const str = " let's find if we got what you are looking for";
  const char = "'";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario 4: Zero occurrence when the string is empty
// Given the input string `str` which is empty,
// And a character `char` that can't be existed in the `str` as it is empty.
// When the function is called with these inputs,
// Then it should return 0, indicating that empty string can't hold that char.

test("should return 0 as the string is empty", () => {
  const str = "";
  const char = "2";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario 5: Multiple occurrences if the string contains single empty spaces and our char is an empty space
// Given the input string `str` that contains ' ' empty spaces,
// And a character `char` which is just single empty space ' '.
// When the function is called with these inputs,
// Then it should return the number of occurrences of single empty spaces in the string.

test("should return multiple occurrences of empty spaces in the string", () => {
  const str = "Hi I have got ten single empty spaces in this string.";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(10);
});

// Scenario 6: No occurrences if the char is just an empty char
// Given the input string `str` that contains any number of characters or no characters at all,
// And a character `char` which is empty ''.
// When the function is called with these inputs,
// Then it should return 0 as there is nothing to count as the char is just empty.

test("should return 0 as the char is just empty", () => {
  const str =
    "Hi I am a string that can be empty or not empty but I can't count empty characters.";
  const char = "";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario 7: Multiple Occurrences at different places
// Given the input string `str`,
// And a character `char` that occurs more than one times in `str` (e.g., 'a' in 'add the angle to the antenna'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char` a in the string.

test("should count multiple occurrences of a character", () => {
  const str = "add the angle to the antenna";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(4);
});
