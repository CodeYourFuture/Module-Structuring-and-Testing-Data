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
// =====> When the function is called, the index is initialized to 0, and then inside the while loop, the index increases by 1 (index++).
// b) What is the if statement used to check
// =====> The if statement checks which index in the string matches the character char, and when this condition is met, it returns that index.
// c) Why is index++ being used?
// =====> The expression index++ increases the value of index by 1 each time, preventing an infinite loop.
// d) What is the condition index < str.length used for?
// =====> This condition makes the while loop run as long as the index is less than the length of the string.
