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
//the index variable is updated if the condition is false i.e the the character in the current index does not match the "char"
// b) What is the if statement used to check
// its used to check if the character in the index is the same as char
// c) Why is index++ being used?
// to increment index by one, returns a new which is then assigned to index
// d) What is the condition index < str.length used for?
//the condition checks all indexes are checked. prevents out of bound access and ending the loop.
