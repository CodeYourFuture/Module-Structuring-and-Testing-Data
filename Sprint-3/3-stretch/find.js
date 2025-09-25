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
//    The index variable is set to 0 on line 2.
//    When the function is called, the while loop on line 4 checks if index (0) is less than the length of the string (16).
//    If the character is not found, the index will increment by 1 on line 8
//    Now, index is 1, and the while loop will check again, until the character is found or the index is no longer less than the length of the string.

// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
