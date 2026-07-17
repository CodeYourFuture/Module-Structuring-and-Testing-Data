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
// The index starts at 0 and increments by one at each iteration as long as the nested if statement is not triggered.  In the case of find("code your future", "u"), the if statement is triggered at index 7 because a match is found for letter u at this index.  The while loop is exited and the number 7 is returned by the find function.  In the case of find("code your future", "z") no match is found by the time the while loop terminates.  In this case the find function returns -1 to indicate the letter z was not found in the string

// b) What is the if statement used to check
// The if statement is used to check if the current letter in the string (str[index]) matches the target letter (char).  If a match is found (str[index] === char) it will cause an early exit from the while loop at the current index which will be returned by the find function

// c) Why is index++ being used?
// index++ is being used because the while loop does not have a built in iterator (like the for loop).  Index is initiated at 0 outside the while loop and at each iteration, whenever the if statement is not triggered, index++ adds 1 to the index number

// d) What is the condition index < str.length used for?
// The condition index < str.length is used to set the upper bound of the loop (the loop will run while index number is less than str.length and will terminate once index is equal to str.length, causing the while loop to stop.  If there is no condition to terminate the while loop it will run infinitely
