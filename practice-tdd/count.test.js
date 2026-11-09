// implement a function countChar that counts the number of times a character occurs in a string
import { countChar } from "./count.js";
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
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

test("should return 0 when the character does not exist", () => {
  const str = "hello";
  const char = "z";

  const count = countChar(str, char);

  expect(count).toEqual(0);
});
test("should count a single occurrence", () => {
  expect(countChar("hello", "h")).toEqual(1);
});
test("should return 0 for an empty string", () => {
  expect(countChar("", "a")).toEqual(0);
});
