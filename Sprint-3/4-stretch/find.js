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
// The index variable starts at 0. In every iteration of the while loop, 
// after the if check is performed, index increases by exactly 1 (index++). 
//  This moves the "pointer" one character to the right through the string str, 
// ensuring that the function checks every character sequentially from left to right.

// b) What is the if statement used to check
// The if statement checks equality. Specifically, it asks: 
// "Does the character currently stored at the index position of the string match the char I am looking for?"
// If the answer is true, the function immediately returns the current index, which exits the entire function.
// If the answer is false, the loop simply continues to the next iteration.

// c) Why is index++ being used?
// index++ (which is shorthand for index = index + 1) is the loop advancement mechanism. 
// Without it, index would remain 0 forever. 
// This would cause an "infinite loop" where the program keeps checking the very first character of the string over and over again, 
// never moving forward to inspect the rest of the string.

// d) What is the condition index < str.length used for?
// This is the boundary condition (or loop guard). It ensures the code doesn't try to look for a character outside of the string's memory.
// In JavaScript, if you try to access an index that doesn't exist, it returns undefined.
// By ensuring index is always less than the length of the string, we guarantee that we only access valid positions. 
// Once index equals the length of the string, it means we have checked every single character without finding a match, 
// so the loop terminates, and the function returns -1 (indicating "not found").
