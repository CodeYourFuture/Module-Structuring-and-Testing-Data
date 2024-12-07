// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of /1:
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

const repeat = require('./repeat');

const currentOutput = repeat("Serna", 3);
const targetOutput = "SernaSernaSerna";

test('This test will check if the repeat function is following the conditions it was given', () => {
    expect(currentOutput).toEqual(targetOutput);
})


const currentOutput2 = repeat("Bj", 1);
const targetOutput2 = "Bj";

test('This test will check if the repeat function is following the condition it was given', () => {
    expect(currentOutput2).toEqual(targetOutput2);
})

const currentOutput3 = repeat("Ali", 0);
const targetOutput3 = "";

test('This test will check if the repeat function is following the zero condition it was given', () => {
    expect(currentOutput3).toEqual(targetOutput3);
})



test('This test will check if the repeat function is following the negtive number condition', () => {
    expect(() => repeat("Julie", -4)).toThrow("Value of num has to be 1 or more!");
})