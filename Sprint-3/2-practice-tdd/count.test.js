const countChar = require("./count");

test("should count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
});

test("should return 0 when character is not found", () => {
  expect(countChar("hello", "z")).toEqual(0);
});

test("should count a single occurrence of a character", () => {
  expect(countChar("hello", "h")).toEqual(1);
});

test("should be case-sensitive", () => {
  expect(countChar("Hello", "h")).toEqual(0);
});

test("should count uppercase characters separately", () => {
  expect(countChar("Hello", "H")).toEqual(1);
});

test("should count character occurring multiple times in different positions", () => {
  expect(countChar("banana", "a")).toEqual(3);
});
