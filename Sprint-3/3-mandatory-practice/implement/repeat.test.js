// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("repeats the string 3 times when count is 3", () => {
    const str = "hello";
    const count = 3;
    expect(repeat(str, count)).toEqual("hellohellohello");
    });

// case: handle Count of 1:
test("returns the original string when count is 1", () => {
    const str = "hello";
    const count = 1;
    expect(repeat(str, count)).toEqual("hello");
    });

// case: Handle Count of 0:
test("returns an empty string when count is 0", () => {
    const str = "hello";
    const count = 0;
    expect(repeat(str, count)).toEqual("");
    });

// case: Negative Count:
test("throws an error when count is negative", () => {
    const str = "hello";
    const count = -3;
    expect(() => repeat(str, count)).toThrow("Invalid input: Count is a negative value");
    });
