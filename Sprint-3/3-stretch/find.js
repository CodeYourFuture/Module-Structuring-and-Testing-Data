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
It starts at 0 and goes up by 1 everytime the loop runs.

// b) What is the if statement used to check
It checks if the character in the string in the current index is the same 
as the one we want to find, or we are looking for.

// c) Why is index++ being used?
To move to the next character in the string.

// d) What is the condition index < str.length used for?
Makes sure we dont go past the end of string.
