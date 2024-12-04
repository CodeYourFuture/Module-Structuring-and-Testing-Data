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
// b) What is the if statement used to check: it matches the char and a given index of the string. if its a match it returns that index.
// c) Why is index++ being used? to increment the index so that the final condition of the while loop will eventually be fulfilled when we reach the end of the string.
// d) What is the condition index < str.length used for?to stop the loop with a final condition and also so that we only search indexes equal to the length of the string.
