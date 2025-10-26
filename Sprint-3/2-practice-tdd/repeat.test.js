// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should: repeat the str count times and return a new string containing the repeated str values.

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 4;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohellohello");
});


// case: Handle Count of 1 :
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition.
test("should return the original string when count is 1", () => {
  const str = "hello";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hello");
});

// case: Handle Count of 0 :
// When count is 0, it should return an empty string.
test("should return an empty string when count is 0", () => {
  const str = "hello";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Negative Count :
// When count is negative, it should throw an error.
test("should throw an error when count is negative", () => {
  const str = "hello";
  const count = -2;
  expect(() => repeat(str, count)).toThrow("Count must be a non-negative integer");
});


// case: Non-string input for str :
// When str is not a string (e.g., number), it should still repeat it as a string.
test("should convert non-string input to string before repeating", () => {
  const str = 123;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("123123");
});

// case: Non-integer count :
// When count is a non-integer (e.g., 2.5), it should repeat only the integer part.
test("should handle non-integer count by truncating it", () => {
  const str = "hi";
  const count = 2.5;
  const repeatedStr = repeat(str, Math.floor(count));
  expect(repeatedStr).toEqual("hihi");
});

// case: Empty string input :
// When str is empty, the result should always be empty, regardless of count.
test("should return an empty string when str is empty", () => {
  const str = "";
  const count = 5;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Undefined or missing arguments :
// When arguments are missing or undefined, it should throw an error.
test("should handle undefined inputs gracefully", () => {
  expect(() => repeat(undefined, 3)).toThrow("argument must be defined");

});

// case: Boolean inputs :
// When str or count are booleans, it should convert str to string and handle count normally.
test("should handle boolean values as inputs", () => {
  const str = true;
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("truetrue");
});
