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
index increments by 1 after each iteration to move to the next character in the string.
*/

// b) What is the if statement used to check
/*
It checks if the character at the current index (str[index]) matches the target character (char).
*/

// c) Why is index++ being used?
/*
It is used to increment the index variable by 1 after each iteration, effectively moving to the next
character in the string. 
*/

// d) What is the condition index < str.length used for?
/*
It is used to determine whether the while loop should continue or terminate. The loop will continue as long
as the index is less than the length of the string. Once the index reaches the end of the
*/
