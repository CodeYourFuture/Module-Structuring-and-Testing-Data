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

// The while loop statement allows us to do iteration - the repetition of 
//a certain number of tasks
// according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and
// observe how this 
//code is executed

// Pay particular attention to the following:

// a) How the index variable updates during the call to find
The index is  increases by 1 allows the loop to move through the string one character at a time.

// b) What is the if statement used to check
It checks whether the character at the current index matches the target character.
// c) Why is index++ being used?
index++ increments the index variable by 1 after each iteration of the loop.The loop stops when index reaches str.length.
// d) What is the condition index < str.length used for?
The condition index < str.length ensures that the loop runs only while the index is ValidityState.
