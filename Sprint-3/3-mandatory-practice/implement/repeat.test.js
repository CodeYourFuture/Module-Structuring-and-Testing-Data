// Implement a function repeat
//const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

//test("should repeat the string count times", () => {
   // const str = "hello";
   // const count = 3;
   // const repeatedStr = repeat(str, count);
   // expect(repeatedStr).toEqual("hellohellohello");
   // });

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
const repeat = require("./repeat");

describe("repeat function", () => {
    // Case 1: Repeat string multiple times
    test("should repeat the string count times", () => {
        expect(repeat("hello", 3)).toEqual("hellohellohello");
    });

    // Case 2: Handle count of 1 (should return the original string)
    test("should return the original string when count is 1", () => {
        expect(repeat("hello", 1)).toEqual("hello");
    });

    // Case 3: Handle count of 0 (should return an empty string)
    test("should return an empty string when count is 0", () => {
        expect(repeat("hello", 0)).toEqual("");
    });

    // Case 4: Handle negative count (should return an error message)
    test("should return an error message for negative count", () => {
        expect(repeat("hello", -3)).toEqual("Count cannot be negative");
    });

    // Case 5: Handle non-string input
    test("should return 'Invalid input' if str is not a string", () => {
        expect(repeat(123, 3)).toEqual("Invalid input");
    });

    // Case 6: Handle non-numeric count
    test("should return 'Invalid input' if count is not a number", () => {
        expect(repeat("hello", "3")).toEqual("Invalid input");
    });
});
