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
// In this example, there is a while loop and it works till to check all letters and it will increase one by one
// because index++ increases index value.
// when it finds first index, loop won't continue because of return.
// b) What is the if statement used to check
// This if statement compare char parameter and character of str at the specific index.
// c) Why is index++ being used?
// This row is written to use increase index and compare all letters in the str.
// d) What is the condition index < str.length used for?
// str.length gives the number of letters in str and while loop should continue till to check all letters
// except finding first index of the match.
