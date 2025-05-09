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

// a) How the index variable updates during the call to find:
//The while loop is used to repeat the checking of characters in the string.
//As a result, the index variable is incremented by 1, and each character in the string is compared to the char value.

// b) What is the if statement used to check:
//The if statement is used to check if the character at the current position is equal to char.

// c) Why is index++ being used?
//The index++ is used to move the index to the next position, ensuring that we check every character in the string.

// d) What is the condition index < str.length used for?
//The condition index < str.length ensures the loop stops when we’ve checked every character in the string.
