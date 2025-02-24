const countChar = require("./count");

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test("should return 0 for a character not present in the string", () => {
  const str = "hello";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);    
});

test("should count case-sensitive occurrences", () => {
  const str = "Hello, hello!";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

test("should return 0 for an empty string", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
