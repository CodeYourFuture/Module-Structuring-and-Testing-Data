const countChar = require("./countChar");

// Scenario: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";

  const count = countChar(str, char);

  expect(count).toEqual(5);
});

// Scenario: No Occurrences
test("should return 0 when character is not found", () => {
  const str = "hello";
  const char = "z";

  const count = countChar(str, char);

  expect(count).toEqual(0);
});
