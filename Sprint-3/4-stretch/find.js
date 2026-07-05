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
// [MM] - The index variable increments by one each time the letter (str[index]) at the current index does not match the target letter (char)
// b) What is the if statement used to check
// [MM] - The if statement is used to check if the current letter matches the target letter (char).  If a match is found (str[index] === char) it will cause an early exit from the while loop at the current index
// c) Why is index++ being used?
// [MM] - The index++ increments the index variable by one each time the current letter (str[index]) does not match the target letter (char).  It only runs if a match is not found
// d) What is the condition index < str.length used for?
// [MM] - The condition index < str.length is used to set the upper bound of the loop (the loop will run while index number is less than str.length)
