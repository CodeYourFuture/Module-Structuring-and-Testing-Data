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

// Starts at 0, increments by 1 each iteration (index++)
// Moves through each character position: 0 → 1 → 2 → 3 → etc.

// b) What is the if statement used to check

// Checks if the character at the current position (str[index]) matches the character we're searching for (char)

// c) Why is index++ being used?

// To move to the next character position in the string for the next iteration
// Without it, we'd have an infinite loop stuck at the same position

// d) What is the condition index < str.length used for?

// Ensures we don't go beyond the string length
// Prevents accessing invalid memory locations
// Stops the loop when we've checked all characters