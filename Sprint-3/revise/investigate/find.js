function find(str, char) {
  let index = 0; // playing computer, 0

  while (index < str.length) {
    // pc: 0 < 17 (length of "code your future")
    if (str[index] === char) {
      // if the value of str[0] === "u"
      return index; // return this number, but it isn't yet, it's c
    }
    index++; // increment index by 1, so it's now 1, go round again until we reach the end of the string or find the character
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
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?
