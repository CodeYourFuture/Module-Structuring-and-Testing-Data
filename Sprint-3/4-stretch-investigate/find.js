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
// The index starts at 0 and increments with 1 with every while loop iteration until, either the character is found or the end of the string is reached 

// b) What is the if statement used to check
// The if statement checks whether the current character in the string (str[index]) is equal to the specified char

// c) Why is index++ being used?
// The index++ is used to increment the index and move the function to the next character in the string

// d) What is the condition index < str.length used for?
// The condition is used to run the while loop as long as the index is less than the lenght of the string