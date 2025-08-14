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
// - [It increases by 1 each time the while loop iterate.]
// b) What is the if statement used to check ?
// - [the if statement is checking that the current character matches the targeted character.]
// c) Why is index++ being used?
// - [it is used so that the while loop will increment by 1 each time it loops]
// d) What is the condition index < str.length used for?
// - [it's used as the condition to ensure thw loop runs only while the index is less than the length of the string.]
