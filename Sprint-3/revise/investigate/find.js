function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// Answer: The index variable starts at 0 and increases by 1 with each iteration due to index++.
// This lets the loop process each character of the string sequentially.
// b) What is the if statement used to check
// Answer: The if statement (if (str[index] === char)) checks if the character at the current position (str[index]) matches the target character (char).
// c) Why is index++ being used?
// Answer: index++ moves the loop to the next character in the string by increasing index by 1 after each iteration.
// Without this, the loop would repeatedly check the same character, resulting in an infinite loop.
// d) What is the condition index < str.length used for?
// Answer: The condition ensures the loop runs only while index is within the bounds of the string.
// Once index equals the string's length, it means all characters have been checked, and the loop stops. This prevents accessing characters beyond the end of the string, which would result in errors.