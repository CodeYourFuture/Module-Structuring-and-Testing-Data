// Implement a function repeat

const strRepeat = require("./strRepeat");

test("Checks for repeat string", () => {

    const currentOutput = strRepeat("plan", 3)
    const targetOutput = "planplanplan";

    expect(currentOutput).toBe(targetOutput);
});

test("Checks if count of 1 is handled", () => {

    const currentOutput = strRepeat("plan", 1)
    const targetOutput = "plan";

    expect(currentOutput).toBe(targetOutput);
});

test("Checks if count of 0 is handled", () => {

    const currentOutput = strRepeat("plan", 0)
    const targetOutput = "";

    expect(currentOutput).toBe(targetOutput);
});

test("Throws an error if count is negative", () => {
    expect(() => strRepeat("plan", -1)).toThrow("Count must be a non-negative integer");
});




// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

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