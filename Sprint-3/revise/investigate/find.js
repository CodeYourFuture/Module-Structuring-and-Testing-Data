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
//The index variable begins at 0 and increases by 1 each time the loop runs. index++ causes this. The loop keeps running as long as the condition index < str.length is true

// b) What is the if statement used to check
//The if statement checks if the character at the current index (str[index]) is equal(===) to the target character (char). If a match is found, the index is returned at that point.

// c) Why is index++ being used?
//to iterate the index varibale, if it is 0 it increases by one everytime the loop runs until the condition is met. The index++ is used to move to the next character in the string. Without it, the loop would get stuck on the same index, resulting in an infinite loop.

// d) What is the condition index < str.length used for?
//The condition index < str.length makes it so that the loop only runs while index is less than the length of the string.
//This prevents the code from trying to access characters outside the bounds of the string, which would cause an error.
