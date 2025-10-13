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
// The variable index starts at 0.
// Each time the loop runs and the character is not found, index increases by 1 because of index++.
// This continues until:
// The character is found → return index
// OR the end of the string is reached → return -1

// b) What is the if statement used to check
// This checks whether the character at the current position in the string matches the character we are searching for.
// If it matches, it returns the current index

// c) Why is index++ being used?
// index++ increases the value of index by 1 after each loop iteration.
// This allows the code to check the next character in the string on the next loop run

// d) What is the condition index < str.length used for?
// This makes sure the loop stops when we reach the end of the string.
// It prevents accessing str[index] when index is out of range