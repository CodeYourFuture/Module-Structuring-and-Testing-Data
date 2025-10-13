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
// In the beginning of the function it is set to 0, then each time the while loop runs it increases by 1 until it reaches the length of the string .
// b) What is the if statement used to check
// The if statement checks if the character at the current index of the string is equal to the character we are searching for. If it is, the function returns the current index.
// c) Why is index++ being used?
// The index++ is used to move to the next character in the string after each iteration of the while loop.
// d) What is the condition index < str.length used for?
// The condition index < str.length is used to ensure that the while loop continues to run as long as there are characters left to check in the string.
