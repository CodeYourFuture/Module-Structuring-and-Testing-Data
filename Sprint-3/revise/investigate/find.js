function find(str, char) {
  //this var will store once find the index === to equal.
  let index = 0;

  // The while loop iterates through each character in the string
  //while loop will map the string and find if there is any match character in the string.
  while (index < str.length) {
    if (str[index] === char) {
      // If the character at the current index matches the input char, return the index
      return index;
    }
    //update the value of index and continue until index is less than the str.length.
    index++;
  }
  // If the loop completes and no match is found, return -1
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
