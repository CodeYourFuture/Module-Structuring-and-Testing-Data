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
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

// a) index variable starts at 0, during each iteration of the while loop. While index < str.length the loop will repeat. index will check against char within the if statement. After the check index is increased by 1 using index++.

// b) the if statement checks if the current index matches the character of variable char. if str[index] === char is true then the current value of index is returned.

// c) index is used to move to the next position within the string for each iteration of the loop. Without index++, index will not change and index < str.length will always be true and therefore the creating an infinite loop.

// d) str.length provides the total number of characters in the input string. The loop runs until the index reaches this length, ensuring it doesn’t check beyond the string's bounds