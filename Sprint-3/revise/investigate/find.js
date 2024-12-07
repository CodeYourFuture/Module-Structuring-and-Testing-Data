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
/*

The index variable keeps track of the current position in the str string.
- It starts at 0 which represents the first character in the string.
- In each iteration, the value of index is incremented by 1 using index++. This moves the loop to the next character in the string.
- The loop continues as long as index is less than the length of the string (str.length).

*/

// b) What is the if statement used to check
/*
The if statement checks if the current character at the index position in the str string is equal to the target char.
*/

// c) Why is index++ being used?
/*
The index++ statement is used to increment the index variable by 1 after each iteration of the while loop. 
This ensures that the loop examines each character in the string exactly once. 
*/

// d) What is the condition index < str.length used for?
/*
The condition index < str.length controls how long the while loop continues to iterate. 
The loop continues as long as the index value is less than the length of the string (str.length).
*/
