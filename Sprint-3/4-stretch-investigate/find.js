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
//the value increase by 1
// b) What is the if statement used to check
// when index reaches desired char return it
// c) Why is index++ being used?
//idex++ is being used to increment the index by one on each iteration of the loop
// this ensures the loop progresses through the string, moving from one position to the next
//without the increment the loop will be stuck on an infinite loop and on the same index
// d) What is the condition index < str.length used for?
//this ensures the index does not go beyond the length of the string
