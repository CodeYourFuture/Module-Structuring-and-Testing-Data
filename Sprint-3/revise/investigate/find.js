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
// b) What is the if statement used to check

//The if statement is used to determine or check if the part of the string has the character that we are looking for 
// c) Why is index++ being used?

//   index++ makes sure the function looks at each character in the string one by one until it finds a match or reaches the end.

// d) What is the condition index < str.length used for?
// It checks if the current index is less than the length of the string to ensure the loop doesn't go beyond the string.
