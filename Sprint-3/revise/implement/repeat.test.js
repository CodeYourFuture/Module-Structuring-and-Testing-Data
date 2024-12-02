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
function repeat(str, count) {
    // case: Negative Count:
    if (count < 0) {
      throw new Error("Count must be a non-negative integer.");
    }
  
    // case: Handle Count of 0:
    if (count === 0) {
      return "";
    }
  
    // case: handle Count of 1:
    if (count === 1) {
      return str;
    }
  
    // case: repeat string count times using a loop
    let result = "";
    for (let i = 0; i < count; i++) {
      result += str;
    }
  
    return result;
  }
  
  // Test cases
console.assert(repeat("abc", 3) === "abcabcabc", "Test Case 1 Failed");
console.assert(repeat("abc", 1) === "abc", "Test Case 2 Failed");
console.assert(repeat("abc", 0) === "", "Test Case 3 Failed");

try {
  repeat("abc", -1);
  console.assert(false, "Test Case 4 Failed");
} catch (e) {
  console.assert(e.message === "Count must be a non-negative integer.", "Test Case 4 Failed");
}

console.log("All test cases passed.");