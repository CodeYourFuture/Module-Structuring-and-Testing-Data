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
//>>>The index value at the beginning is 0 and increases by 1 with each loop, moving through (index++)until the target character
//>>> is found or the end of the string is reached.

// b) What is the if statement used to check
//>>>The if statement checks if the character at the string matches with the target character. If they are match, it returns
//>>> the current index.

// c) Why is index++ being used?
//>>>It is used to increment the value of index by 1 in each loop , and checking the next character in the string.

// d) What is the condition index < str.length used for?
//>>>It stops the loop from running after the end of the string, when string finish(last index) loop will stop.