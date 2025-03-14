// // Implement a function repeat
// const repeat = require("./repeat");
// // Given a target string str and a positive integer count,
// // When the repeat function is called with these inputs,
// // Then it should:

// // case: repeat String:
// // Given a target string str and a positive integer count,
// // When the repeat function is called with these inputs,
// // Then it should repeat the str count times and return a new string containing the repeated str values.

// test("should repeat the string count times", () => {
//     console.log("Running test case: repeat String");
//     const str = "hello";
//     const count = 3;
//     const repeatedStr = repeat(str, count);
//     expect(repeatedStr).toEqual("hellohellohello");
// });

// // case: handle Count of 1:
// // Given a target string str and a count equal to 1,
// // When the repeat function is called with these inputs,
// // Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.
// test("should return original str", () => {
//     console.log("Running test case: handle Count of 1");
//     const str = "hello";
//     const count = 1;
//     const repeatedStr = repeat (str, count);
//     expect(repeatedStr).toEqual("hello");
// });

// // case: Handle Count of 0:
// // Given a target string str and a count equal to 0,
// // When the repeat function is called with these inputs,
// // Then it should return an empty string, ensuring that a count of 0 results in an empty output.
// test("should return empty string", () => {
//     console.log("Running test case: Handle Count of 0");
//     const str = "hello";
//     const count = 0;
//     const repeatedStr = repeat(str, count);
//     expect(repeatedStr).toEqual("");
// });

// // case: Negative Count:
// // Given a target string str and a negative integer count,
// // When the repeat function is called with these inputs,
// // Then it should throw an error or return an appropriate error message, as negative counts are not valid.
// test("should throw error", () => {
//     console.log("Running test case: Negative Count");
//     const str = "hello";
//     const count = -1;
//     expect(() => repeat(str, count)).toThrow("Invalid count");
// });

const repeat = require("./repeat");

// case: repeat String:
test("should repeat the string count times", () => {
    console.log("Running test case: repeat String");
    const str = "hello";
    const count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1:
test("should return original str", () => {
    console.log("Running test case: handle Count of 1");
    const str = "hello";
    const count = 1;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hello");
});

// case: Handle Count of 0:
test("should return empty string", () => {
    console.log("Running test case: Handle Count of 0");
    const str = "hello";
    const count = 0;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("");
});

// case: Negative Count:
test("should throw error", () => {
    console.log("Running test case: Negative Count");
    const str = "hello";
    const count = -1;
    expect(() => repeat(str, count)).toThrow("Invalid count");
});