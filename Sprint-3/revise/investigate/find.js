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

// answer: index starts at 0 and increases by 1 with each loop to check each character in the string.
// The loop stops when it finds the character or reaches the end of the string.

// b) What is the if statement used to check
// answer: The if checks if the current character (str[index]) matches the target character (char).
// If they match, it returns the current index.


// c) Why is index++ being used?
// answer: index++ increases the index by 1 to check the next character in the string.
// It moves the loop through the string one character at a time.

// d) What is the condition index < str.length used for?
// asnwer: index < str.length ensures the loop doesn't go past the end of the string.
// It makes sure the loop checks only valid characters in the string.
