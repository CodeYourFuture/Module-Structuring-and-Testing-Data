function find(str, char) {
  // Initialize a variable to store the index of the matched character
  let index = 0;

  // The while loop iterates through each character in the string
  // It checks if the current character matches the input character
  while (index < str.length) {
    if (str[index] === char) {
      // If a match is found, return the index of the matching character
      return index;
    }
    // Increment the index to check the next character
    index++;
  }
  // If no match is found after the loop finishes, return -1
  return -1;
}

console.log(find("hello word find my index", "x")); // Output: 23
console.log(find("code your future", "f")); // Output: 10
console.log(find("code your future", "z")); // Output: -1

// The while loop statement allows us to do iteration - the repetition of a certain number
//  of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
