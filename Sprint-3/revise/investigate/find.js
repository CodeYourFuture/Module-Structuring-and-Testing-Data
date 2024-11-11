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
// its starts at 0 (first char in str)
// inside while loop it increase by 1 in each iteration until it reaches the end of str
// it either becomes false or str[index] === char is true
// then the function returns index

// b) What is the if statement used to check
// check the char at the current index in str if its match it

// c) Why is index++ being used?
// to avoid being stuck in an infinite loop
// it allows the while loop to move to the next char in each iteration

// d) What is the condition index < str.length used for?
// to make sure the loop will stop once index reaches the length of str
// once index = str.length the loop stops and the function return -1 (char not found in str)
