// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");

// Scenario 1: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
  expect(countChar("sea saw", "s")).toEqual(2);
  expect(countChar("Arrested Development", "d")).toEqual(2);
  expect(countChar("* Star * TV *", "*")).toEqual(3);
});

// Scenario 2: Single Occurrence
test("should count multiple occurrences of a character", () => {
  expect(countChar("a", "a")).toEqual(1);
  expect(countChar("Star Light", "i")).toEqual(1);
  expect(countChar("!@#$%^&*()", "#")).toEqual(1);
  expect(countChar("onomatopoeia", "t")).toEqual(1);
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
