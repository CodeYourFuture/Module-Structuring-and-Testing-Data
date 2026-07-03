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
// The index variable starts at 0 and increments by 1 in each iteration of the while loop.
// In case of the call find("code your future", "u"), the index variable updates as follows:
// 0, 1, 2, 3, 4, 5, 6, 7 - when it stops, because the character at index 7 is "u"
// In case of the call find("code your future", "z"), the index variable updates as follows:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 - when it stops, because the condition index < str.length is no longer true
// the and because the loop has arrived to the end of the string without finding "z".

// b) What is the if statement used to check
// The if statement is used to check if the character at the current index is equal to the character we are looking for.

// c) Why is index++ being used?
// index++ is incrementing the index by 1 in each iteration of the while loop. this is how the index is being moved from 0 to the end of the string, or the index where the character is found.

// d) What is the condition index < str.length used for?
// It gives the limit to the looping, that is, the index must be less than the length of the string, and in case the index is equal or greater than the string length, the loop will stop.
// If this condition wasn't given, the loop would continue to run indefinitely.
