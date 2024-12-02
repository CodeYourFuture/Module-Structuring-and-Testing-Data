// Implement a function repeat

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
// repeatSTR.test.js
const repeatSTR = require("./repeat");

describe("repeatSTR Function Tests", () => {
  test("Repeats string with a positive count", () => {
    const string = "London";
    const count = 3;
    const result = repeatSTR(string, count);
    expect(result).toBe("LondonLondonLondon");
  });

  test("Returns an empty string when count is 0", () => {
    const string = "London";
    const count = 0;
    const result = repeatSTR(string, count);
    expect(result).toBe("");
  });

  test("Throws an error for negative count", () => {
    const string = "London";
    const count = -7;
    expect(() => repeatSTR(string, count)).toThrow(
      "Negative counts are not valid"
    );
  });
});
