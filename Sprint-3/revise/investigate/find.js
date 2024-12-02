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
// 1. It updates as it iterates through the str when find() is called and will run / increment at least once while the condition is true or a character match is found.
// b) What is the if statement used to check
// 2. It checks if there's a character match, within the string index, and it's found on position 7.
// c) Why is index++ being used?
// 3. Index++ is used so that if there's a character match within the string index will increment / start to count up that position.
// d) What is the condition index < str.length used for?
// 4. This condition is used to check or track the index's length against the string's length through iteration.  
