// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

// Function to find the index of the first occurrence of a character in a string
function find(str, char) {
  let index = 0;

  while (index < str.length) { // d) Loop continues while index is less than the string length
    if (str[index] === char) { // b) Checks if the current character matches the target character
      return index;            // If match found, return the index
    }
    index++;                   // c) Move to the next character
  }
  return -1;                   // If not found, return -1
}

console.log(find("code your future", "u")); // Output: 7
console.log(find("code your future", "z")); // Output: -1
