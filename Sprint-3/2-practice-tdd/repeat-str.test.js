// Implement a function repeatStr
const repeatStr = require("./repeat-str");


describe("repeatStr", () => {
  // Case: handle multiple repetitions
  test("should repeat the string count times", () => {
    const str = "hello";
    const count = 3;
    const repeatedStr = repeatStr(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
  });

  // Case: handle count of 1
  test("should return the original string when count is 1", () => {
    const str = "apple";
    const count = 1;
    expect(repeatStr(str, count)).toEqual("apple");
  });

  // Case: Handle count of 0
  test("should return an empty string when count is 0", () => {
    const str = "ghost";
    const count = 0;
    expect(repeatStr(str, count)).toEqual("");
  });

  // Case: Handle negative count
  test("should throw an error when count is negative", () => {
    const str = "error";
    const count = -1;

    // We wrap the call in a function so Jest can catch the error
    expect(() => {
      repeatStr(str, count);
    }).toThrow("Count must be a non-negative integer");
  });
});

