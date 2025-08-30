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
// index is initialised to 0, and then incremented by 1 using index++ every time the while loop runs until a match a found or wereach the end of the string.

// b) What is the if statement used to check
// the if statement if used to check if the character at the current index matches the targeted char

// c) Why is index++ being used?
// index++ is used to increment the index variable by 1 after each comparison.

// d) What is the condition index < str.length used for?
// that condition is used to control the while loop; and ensures index is less than the length of str
