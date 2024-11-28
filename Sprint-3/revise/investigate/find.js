function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      console.log(str[index]);
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
//The index has been updated by incrementing it with index++ in each iteration of the loop.
// b) What is the if statement used to check
//The if statement has been used to check if the current character (str[index]) is equal to the given character (char).
// c) Why is index++ being used?
//The index++ has been used to increment the index by 1 after each iteration, allowing the loop to move to the next character in the string.
// d) What is the condition index < str.length used for?
//The condition index < str.length has been used to ensure the loop continues until the index reaches the end of the string, preventing the loop from accessing invalid indices.
