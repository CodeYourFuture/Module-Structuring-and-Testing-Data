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
//--the index variable will start at 0, and this will increase by +1 each time the loop runs by using index++ to loop around the string, checking each index inside the string one by one
// b) What is the if statement used to check
//--the if statement checks the current str index if it's equal to char, to find the character we are searching for
// c) Why is index++ being used?
//--the index++ increases the index by 1 each time so the function can check every character in the string one by one.
// d) What is the condition index < str.length used for?
//--this condition will checks the index has not reached the end of the string. Once the index is equal to the string length, the loop stops
