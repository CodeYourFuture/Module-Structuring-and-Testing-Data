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
/*Answer:
1-The index variable starts at 0 and is used to track the position of the current character being checked in the string.
2-After each iteration of the loop, index is incremented by 1 (index++), moving it to the next character in the string.
3-The loop continues checking each character until it either finds the target character or reaches the end of the string.
4-For example, when searching for "u" in "code your future", index starts at 0 and keeps increasing until it finds "u" at index 10.


// b) What is the if statement used to check
Answer:
1-The if statement inside the while loop checks whether the current character (str[index]) is equal to the target character (char).
if (str[index] === char)
2-If a match is found, the function immediately returns the current index.
3-If no match is found, the loop continues, and the index is incremented to check the next character.

// c) Why is index++ being used?
Answer:
index++ is used to move the index to the next character in the string after each iteration of the loop.
Without this, the loop would get stuck at the same character and never progress.
For example, if index were not incremented, it would stay at the starting index (0) and repeatedly check the same character in the string.

// d) What is the condition index < str.length used for?
Answer:
The condition index < str.length ensures that the loop runs only as long as index is within the valid range of the string. It prevents the loop from accessing an index that is out of bounds.

When index equals str.length, the loop stops, meaning we’ve checked every character in the string.
Without this condition, the loop would attempt to check beyond the end of the string, which would result in an error.*/
