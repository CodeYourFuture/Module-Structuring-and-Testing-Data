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
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

test("should not repeat the string", ()=>{
const str = "hello";
const count = 1;
const repeatedStr = repeat(str, count);
expect(repeatedStr).toEqual("hello")
})

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// test("should return an empty string", ()=>{
//   const str = "hello";
//   const count = 0;
//   const repeatedStr = repeat(str, count);
//   expect(repeatedStr).toEqual("");
// })

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

test("should return error", ()=>{
  const str="hello";
  const count=-1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("Error: negative numbers are not valid");
})

// case: Handle empty string:
// Given a target string str and a count equal to 2,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 2 results in an empty output.

test("should return an empty string", () => {
  const str = "";
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Handle string with space:
// Given a target string str and a count equal to 2,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should return an empty string", () => {
  const str = "a b";
  const count = 2;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("a ba b");
});

// case: Handle long string :
// Given a target string str and a count equal to1,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should return an empty string", () => {
  const str = "xvg56756yrhfghe5ujdfh45657tjrtg6yrthrty";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("xvg56756yrhfghe5ujdfh45657tjrtg6yrthrty");
});

// case: Handle single character string and high count :
// Given a target string str and a count equal to 18,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should return an empty string", () => {
  const str = "x";
  const count = 18;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("xxxxxxxxxxxxxxxxxx");
});