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
/*let index = 0; The variable index starts at 0.
On each loop iteration, it increases by 1 using index++ until the string's length*/
// b) What is the if statement used to check
/*
if (str[index] === char)
checks: Is the current character equal to the one we are looking for that is passed as a parameter?
If yes, it return its position using return index.
*/
// c) Why is index++ being used?
// Because we need to  It increases index by 1 on each loop and update its value in each iteration to prevent from infinite loop

// d) What is the condition index < str.length used for?
/*
It is the stopping condition for the while loop.
It ensures that the loop only runs as long as there are characters left in the string.
*/