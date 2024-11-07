// Implement a function repeat

const { default: test } = require("node:test");

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
function repeat(string, integer) {
  let string1 = string;
  if (integer == 0) return " ";
  if (integer < 0)
    return "Negative numbers as a repetition input is not acceptable. Please insert an integer number greater or equal to 0";

  for (let i = 1; i < integer; i++) {
    string1 = string1 + string;
  }
  return string1;
}
console.assert(repeat("hi", 2) == "hihi", "true");
