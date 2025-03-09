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

// a) How the index variable updates during the call to find: It starts from 0 and increases by 1 during each iteration
// b) What is the if statement used to check: It checks if the current character in the string matches the character at a particular index of str
// c) Why is index++ being used? It is used to move to the next index
// d) What is the condition index < str.length used for? it is used to tell the iteration when to stop
