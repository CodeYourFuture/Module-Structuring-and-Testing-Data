// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string 3 times", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
    });

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.
test("should repeat the string 1 times", () => {
    const str = "Hatef";
    const count = 1;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("Hatef");
    });

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.
test("should repeat the string 0 times", () => {
    expect(repeat("Hatef", 0)).toEqual("");
    });

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("should return an error message", () => {
    const str = "Hatef";
    const count = -1;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("How can we repeat a string negative times? We can't do that. Please enter a positive number.");
    });

// case: Handle number values:
test("Should repeat the number 3 times", () => {
    
    //this time we assign a number to the str variable
    const str = 3;
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("333");
    });
