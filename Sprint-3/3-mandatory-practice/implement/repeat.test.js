// Import the repeat function from repeat.js
const repeat = require("./repeat");

// case: repeat String
// Given a target string `str` and a positive integer `count`,
// when the repeat function is called with these inputs,
// then it should repeat `str` `count` times and return a new string containing the repeated values.
test("should repeat the string count times", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1
// Given a target string `str` and a count of 1,
// when the repeat function is called with these inputs,
// then it should return the original string without repetition,
// ensuring that a count of 1 does not produce repetitions.
test("should return the original string when count is 1", () => {
    const str = "hello";
    const count = 1;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hello");
});

// case: Handle Count of 0
// Given a target string `str` and a count of 0,
// when the repeat function is called with these inputs,
// then it should return an empty string,
// ensuring that a count of 0 results in an empty output.
test("should return an empty string when count is 0", () => {
    const str = "hello";
    const count = 0;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("");
});

// case: Negative Count
// Given a target string `str` and a negative integer `count`,
// when the repeat function is called with these inputs,
// then it should throw an error, as negative counts are not valid.
test("should throw an error for negative count", () => {
    expect(() => repeat("hello", -1)).toThrow("The repetition count cannot be negative");
});

// case: Invalid First Argument (not a string)
// If the first argument is not a string,
// the function should throw an error.
test("should throw an error if first argument is not a string", () => {
    expect(() => repeat(123, 3)).toThrow("The first argument must be a string");
});

// case: Invalid Second Argument (not an integer)
// If the second argument is not an integer number,
// the function should throw an error.
test("should throw an error if count is not an integer", () => {
    expect(() => repeat("hello", 2.5)).toThrow("The second argument must be an integer number");
});
