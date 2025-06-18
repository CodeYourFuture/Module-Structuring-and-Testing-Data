// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
    const str = "hello";
    let count = 3;
    const repeatedStr = repeat(str, count);
    expect(repeatedStr).toEqual("hellohellohello");
    });

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

test("a count of 1 should return the string without repetition", () => {
    const str2 = "beans";
    const count2 = 1;
    const repeatedStr2 = repeat(str2, count2);
    expect(repeatedStr2).toEqual("beans");
})

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

test("a count of 0 should return an empty string, regardless of str input", () => {
    const str3 = "meow";
    const count3 = 0;
    const repeatedStr3 = repeat(str3,count3);
    expect(repeatedStr3).toEqual("");
})

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.
test("a negative count should throw an error", () => {
    const str4 = "djent";
    const count4 = -4;
    expect(()=> repeat(str4,count4)).toThrow();
})
