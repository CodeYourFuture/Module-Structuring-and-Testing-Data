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

// console.log(find("code your future", "u"));
// console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// It will keep track of our current position in the string  starting from 0 and increases by 1 on each loop iteration
// intil character is found or the loop reache the end of the string
// b) What is the if statement used to check
// It is checking if the character at the current index in str is equal to char.
// c) Why is index++ being used?
//It is used to update the index during each iteration so the loop moves to the next character.
// d) What is the condition index < str.length used for?
// This ensure the loop keeps running until index reaches the length of the string, so we do not go past the last character.
