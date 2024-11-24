// Implement a function repeat

function repeat(str, num) {
  return str.repeat(num);
}

const repeatedString1 = repeat("Hello", 3);
console.log(repeatedString1); // Output: "HelloHelloHello"

const repeatedString2 = repeat("Apple is red", 1);
console.log(repeatedString2); // Output: "Apple is red"

const repeatedString3 = repeat("Banana is yellow", 0);
console.log(repeatedString3); // Output: ""

try {
  const repeatedString4 = repeat("Orange is orange", -1);
  console.log(repeatedString4);
} catch (error) {
  console.error("Error:", error.message); // Error: Invalid count value: -1
}

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a
//new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition,
//ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:

// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a
//count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate
// error message, as negative counts are not valid.
