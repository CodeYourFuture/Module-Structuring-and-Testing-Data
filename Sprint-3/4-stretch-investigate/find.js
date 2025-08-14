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

/* a) How the index variable updates during the call to find
'let index = 0;' sets up a variable index to start checking from the first character in the string. 
It tracks the current position during the loop, with the index increasing as each character in the string is checked one at a time.


// b) What is the if statement used to check
Checks whether the character at the current index in the string matches the target character. 
When the character is found, the function returns the index and stops running.


// c) Why is index++ being used?
Ensures the index moves onto the next character during each iteration. 
Without this, the loop would get stuck on the same character instead of running through the rest of the string.


// d) What is the condition index < str.length used for?
Continue checking each character while the length of the string is greater than the position of the index, 
if no match is found then the function returns -1. 
*/