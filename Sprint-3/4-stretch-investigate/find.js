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
//first the index start at value 0, then it is incremented by 1 each time the loop iterates until it reaches the str.length-1.

// b) What is the if statement used to check
//It check if the string character at the current index is equal to the character we are looking for. like find("student","student").

// c) Why is index++ being used?
// Is used to increment the index variable by 1 each time the loop iterates, allowing us to check the next character in the string on the next iteration.

// d) What is the condition index < str.length used for?
// To keep the loop running until we have checked all characters in the string.
