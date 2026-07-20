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

// a) index starts at 0 and increments by 1 on each iteration until either the target
//    character is found (returns early) or index reaches str.length (loop ends).
//    For find("code your future", "u"): index goes 0,1,2,3,4,5,6,7 — "u" found at index 7.
//    For find("code your future", "z"): index goes 0..15, never matches, returns -1.

// b) The if statement checks whether the character at the current index equals the
//    target character `char`. If it does, the function returns that index immediately.

// c) index++ increments the index by 1 after each iteration so the loop moves forward
//    through the string one character at a time, preventing an infinite loop.

// d) index < str.length is the loop condition. It ensures the loop only runs while
//    index is within the valid range of the string. Once index equals str.length
//    there are no more characters to check, so the loop stops and -1 is returned.
