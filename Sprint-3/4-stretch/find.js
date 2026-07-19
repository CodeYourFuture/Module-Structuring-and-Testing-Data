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
// the index variable starts at 0 and is incremented by 1 after each iteration of the while loop.

// b) What is the if statement used to check
// the if statement is used to check if the character at the current index of the string is equal to the character we are searching for.
// if the condition is true ,it will return the index of the character in the string. '
// if the condition is false, it will continue to the next iteration of the loop until it finds the character or reaches the end of the string.

// c) Why is index++ being used?
/*
 the index++ is used to increment the index variable by 1 after each iteration of the loop. 
This allows the loop to move to the next character in the string for the next iteration. Without this increment, 
the loop would get stuck on the same character and could potentially run indefinitely if the condition is never met.
*/

// d) What is the condition index < str.length used for?
/*
the index < str.length  condition is used to ensure that the loop continues to iterate through the string until it reaches the end.
the index variable is used to keep track of the current position in the string, and the loop will continue as long as index is less than the length of the string. 
Once index reaches the length of the string, 
 it means we have checked all characters in the string, and if we haven't found the character we're looking for, we return -1 to indicate that it was not found.
 */