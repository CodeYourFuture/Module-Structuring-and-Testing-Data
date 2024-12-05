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
console.log(find("code your future", "f"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// The index variable begins at 0 and increases by 1 with each loop iteration, moving through each character in the string until either the target character is found or the end of the string is reached.

// b) What is the if statement used to check
// The if statement verifies if the character at the current index of the string matches the specified target character. If they are equal, it returns the current index.

// c) Why is index++ being used?
// The expression index++ is used to increment the value of index by 1 in each loop iteration, ensuring that the next character in the string is checked.

// d) What is the condition index < str.length used for?
// It is there to prevent the loop from running past the end of the string, ensuring the index stays within valid bounds.
