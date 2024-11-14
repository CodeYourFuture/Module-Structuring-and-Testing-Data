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

//The index variable is used to keep track of the current position in the string. The while loop iterates through the string one character at a time.
//On the first iteration, index is 0, and the function checks the character at position 0 (the first character in the string).
//Each time the loop goes through an iteration, index++ increases the value of index by 1 so the next character can be checked.
 
// b) What is the if statement used to check

//If the character at str[index] equals char, the function immediately returns the current index, which is the position of the first occurrence of char in the string.
//If the character does not match, the loop continues to the next character by incrementing the index.

// c) Why is index++ being used?

//This ensures that the next character in the string is checked on the subsequent iteration.

// d) What is the condition index < str.length used for?

//The condition index < str.length is used to ensure the loop doesn't go beyond the end of the string.
