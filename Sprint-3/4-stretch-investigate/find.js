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

function find(str, char) {
  let index = 0; // Start checking from the first character in the string

  // Loop through each character until the end of the string
  while (index < str.length) {
    // Check if the current character matches the one we're looking for
    if (str[index] === char) {
      return index; // If found, return its position
    }
    index++; // Move to the next character
  }

  return -1; // If the character wasn't found, return -1
}


console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

console.log(find("code your future", "u")); // Should return 7 (first "u")
console.log(find("code your future", "z")); // Should return -1 (not found)

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
