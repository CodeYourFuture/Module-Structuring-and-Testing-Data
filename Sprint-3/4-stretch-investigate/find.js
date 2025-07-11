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

// This code defines a function `find` that searches for the first occurrence of a character in a string and returns its index.
// If the character is not found, it returns -1.
// The function uses a while loop to iterate through each character in the string until it finds a match or reaches the end of the string
// The loop continues as long as the index is less than the length of the string.

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
// e) What is the return value when the character is found?
// f) What is the return value when the character is not found?
// g) How does the while loop terminate?
// h) How does the while loop differ from a for loop?

