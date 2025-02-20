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
// index starts at 0 and increases by 1 in each iteration of the while loop (index++).
// The loop continues until index reaches str.length or the character is found.

// b) What is the if statement used to check
// It checks if str[index] === char.
// If this condition is true, it means the character is found at that position, and the function returns index.

// c) Why is index++ being used?
// This ensures that we move to the next character in str on each iteration.
// Without index++, the loop would run infinitely if the character isn't found.

// d) What is the condition index < str.length used for?
// It ensures the loop doesn't continue past the end of str, preventing an "out-of-bounds" error.
// Once index equals str.length, the loop stops, meaning the character wasn't found, and -1 is returned.
