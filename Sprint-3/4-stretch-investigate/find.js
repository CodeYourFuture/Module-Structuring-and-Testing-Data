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
The index variable is set at 0 at the start of the fucntion. Each time the while loop runs it increases the index by 1. In other words it moves through each index position in the string, checking each character as it loops through the string.
*/

// b) What is the if statement used to check
/*
The if statement checks that the character a the current index in the string (str[index]) is equal to the target character (char). If it is equal then the function returns the index of that character.
*/

// c) Why is index++ being used?
/*
Index++ is exactly the same as saying each time the loop runs increase index by 1, or "index = index + 1". It is being used to move through each character in the string one by one. The index represents the current position of the character in the string being checked.
*/

// d) What is the condition index < str.length used for?
/*
This condition is used to make sure that the index doesn;t go beyond the length of the string (we don't want it to go past the end of the string and cause an error). Essentially we are limiting checking the index of each character to the length of the string.
*/
