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
// the index starts at 0 and increases by 1 each time the loop runs, until it finds the target character or goes through the whole string.

// b) What is the if statement used to check
// check each character in the string and return the index of the first character that matches char.

// c) Why is index++ being used?
// index++ is used to increment the index value by 1 on each iteration.

// d) What is the condition index < str.length used for?
// to check all the characters in the strings (depends of the length).
