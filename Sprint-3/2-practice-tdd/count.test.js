const countChar = require("./count");

test("should count multiple occurrences of a character", () => {
  expect(countChar("aaaaa", "a")).toEqual(5);
});

test("should return 0 when character does not occur", () => {
  expect(countChar("hello", "z")).toEqual(0);
});
