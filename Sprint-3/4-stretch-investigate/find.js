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

// a) How does the index variable update during the call to find
// The index updates +1 every time if the letter we seek wasn't met.
// b) What is the if statement used to check
// We use an if statement in this case to check if the letter in the sentence we inspect under a particular index matches
// the letter we are looking for(defined in function parameter when we call it )
// c) Why is index++ being used?
// We used index++ to increase by one index every time we iterate the loop. ! circle === +1 index.
// d) What is the condition index < str.length used for?
// This condition we used to make the loop finite.
