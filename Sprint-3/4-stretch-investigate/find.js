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
//ans: to check current position
// b) What is the if statement used to check
//ans: if the char of current index has the same char parameter than the function will return with current index
// c) Why is index++ being used?
//ans: to increment or move the index to next char for next checking loop
// d) What is the condition index < str.length used for?
//ans: that is the max iteration for index.
