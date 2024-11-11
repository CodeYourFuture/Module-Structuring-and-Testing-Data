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
// index updates: Starts at 0 and goes up by 1 each time, checking each character in the string.
// b) What is the if statement used to check
// if statement: Checks if the current character matches the one we’re looking for. If it does, it returns the position.
// c) Why is index++ being used?
// index++: Moves to the next character so we don’t get stuck on the same one.
// d) What is the condition index < str.length used for?
// index < str.length: Makes sure we stop when we reach the end of the string.

