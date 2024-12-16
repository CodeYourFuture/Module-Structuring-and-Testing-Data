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
    // The index variable is used to track the current position in the string str.
    // During each iteration of the while loop, index is incremented (index++), which moves it to the next character in the string.
    // This incrementing continues until index reaches the length of the string (str.length)

// b) What is the if statement used to check
    // The if statement checks if the character at the current index position in the string str is equal to the character char.
    // If they match, it returns the current index because we have found the character in the string.
    // If they don't match, the loop proceeds to the next character (index++).

// c) Why is index++ being used?
      // index++ is used to increment the index variable by 1 after each iteration.
      // This increment allows the function to move sequentially through each character in the string, one by one, checking each one until the desired character is found or the end of the string is reached.

// d) What is the condition index < str.length used for?
      // The condition index < str.length ensures that the loop continues to iterate through the string as long as the current index is less than the string's length.
      // It prevents the loop from going out of bounds 