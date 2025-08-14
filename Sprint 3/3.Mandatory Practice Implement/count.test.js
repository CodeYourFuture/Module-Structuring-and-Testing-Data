const countChar = require("./count");

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

test('no occurrences of a character', () => {
  const str = null;
  const char = null;
  const count = countChar(str, char);
  expect(count).toEqual(0);
});