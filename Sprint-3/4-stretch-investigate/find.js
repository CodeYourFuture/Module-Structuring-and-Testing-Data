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
//index starts at 0 and increments by 1 each time the loop runs (index++). 
// This lets the loop check each character in order, from start to finish.
// b) What is the if statement used to check
//The if statement checks whether the character at the current index of the string (str[index]) 
// is equal to the target character (char). If it is, the function immediately 
// returns the current index.
// c) Why is index++ being used?
//index++ increments the index variable by 1 on each loop iteration. 
// This allows the function to check each character in the string sequentially.
// d) What is the condition index < str.length used for? 
//The loop continues as long as index is less than the length of the string.
//  This prevents the loop from running out of bounds and trying to access characters beyond
//  the end of the string.



