const countChar = require("./count");

// Scenario: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
test("should return 0 if character is not found", () => {
  const str = "Hello World";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Case Sensitive Check
test("should be case sensitive when counting characters", () => {
  const str = "aAaAaA";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

// Scenario: Count single occurrence correctly
test("should count a single occurrence correctly", () => {
  const str = "abcdef";
  const char = "d";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Case sensitivity with no matches
test("should return 0 when character case does not match", () => {
  const str = "Millena";
  const char = "m";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Count spaces correctly
test("should count spaces as characters", () => {
  const str = "Millena Mesfin";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Empty String
test("should return 0 for empty string input", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});
