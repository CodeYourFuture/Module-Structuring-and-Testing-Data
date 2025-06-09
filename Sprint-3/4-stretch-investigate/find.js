// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// Index starts at 0 and increments (index++) in each loop iteration.


// b) What is the if statement used to check
// It checks if the current character is the one we are searching for.


// c) Why is index++ being used?
//It moves the the index forward to the next character in str so the loop doesn't get stuck.

// d) What is the condition index < str.length used for?
// Function to find the index of the first occurrence of a character in a string
function find(str, char) {
  let index = 0;

  // It makes sure that the loop only runs within the string’s length
  while (index < str.length) {
    // Checks if the current character matches the target character
    if (str[index] === char) {
      return index;  // If match found, return the index
    }
    index++;  // Move to the next character
  }

  // If the character was not found, return -1
  return -1;
}

console.log(find("code your future", "u")); // Output: 7
console.log(find("code your future", "z")); // Output: -1

