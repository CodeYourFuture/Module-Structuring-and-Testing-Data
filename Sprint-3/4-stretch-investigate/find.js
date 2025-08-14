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

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find
// Answer: The `index` variable starts at 0 and is incremented by 1 after each loop iteration using `index++`. This moves through each character in the string one by one.

// b) What is the if statement used to check
// Answer: It checks whether the character at the current index (`str[index]`) is equal to the target character (`char`). If a match is found, the function returns the index.

// c) Why is index++ being used?
// Answer: To move to the next character in the string. Without this, the loop would get stuck checking the same character repeatedly and never end.

// d) What is the condition index < str.length used for?
// Answer: This condition ensures the loop only runs while the `index` is within the bounds of the string. Once `index` reaches the string's length, it stops the loop to avoid errors or infinite loops.
