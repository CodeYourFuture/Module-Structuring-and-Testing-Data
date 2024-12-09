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
// it updates by increasing by 1 after each loop iteration.

// b) What is the if statement used to check
//We need if statement to check if the current character matches the target character 

// c) Why is index++ being used?
//to prevent the infinite loops and move on to the next character the string


// d) What is the condition index < str.length used for?
//the loops will stop when index is equal to str.length. we need to check character within the string not beyond 

