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
    //  The index will increase with each iteration of the while look, 
    //  unless the condition/s in the if statement are met.
    // If the conditions are met, there is a return. The return would be the value of index.

// b) What is the if statement used to check
    //  The if statement check if the character at current index of the string, is the same as the input value/variable char.

// c) Why is index++ being used?
    // The ++ operator is the increment.  It mean to "add 1 to", 
    // so what index++ does is add 1 to index with each iteration of the while loop.
    // The reason for this so that each character of the string can be checked.

// d) What is the condition index < str.length used for?
    //  It's to ensure that the while loop is not an infinite loop. The loop will run till this condition becomes false.
    //  The condition checks if index is less than the str.length. Once index is no longer less than str.length, the loop will end.
