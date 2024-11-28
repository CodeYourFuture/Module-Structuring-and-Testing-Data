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
// Answer: The index variable starts at 0 and increments by 1 (using index++) each time through the while loop until either 
// the character is found or we reach the end of the string
// b) What is the if statement used to check
// Answer: The if statement checks if the current character at position 'index' in the string matches the character we're searching for
// c) Why is index++ being used?
// Answer: index++ is used to move to the next character in the string after checking the current position. Without incrementing,
// we would check the same position forever in an infinite loop
// d) What is the condition index < str.length used for?
// Answer: This condition ensures we don't try to access characters beyond the end of the string. It stops the loop once we've
// checked every character
