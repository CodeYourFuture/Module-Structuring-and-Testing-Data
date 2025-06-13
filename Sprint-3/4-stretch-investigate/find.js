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
// It starts at the first position (index = 0, line 2)
// Then increases by 1 each time (index++, line 8) until it reaches the end (index < str.length, line 4)

// b) What is the if statement used to check
// It checks if the current letter at the current position is the one we're looking for (str[index] === char, line 5)

// c) Why is index++ being used?
// To move to the next letter in the string

// d) What is the condition index < str.length used for?
// It makes sure we don’t go past the end of the string
