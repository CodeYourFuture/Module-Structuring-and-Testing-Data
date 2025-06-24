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

// The index commences at 0 and is incremented by 1 on each iteration of the loop via the use of the index operator (++).

// b) What is the if statement used to check

// The function performs a comparison of the current character in the string (str[index]) with the character specified in the search parameter.

// c) Why is index++ being used?

// The purpose of this function is to increment the index, thereby enabling the loop to progress to the subsequent character.

// In the absence of this mechanism, the loop would be perpetually engaged in the verification of the same character, resulting in an infinite loop.

// d) What is the condition index < str.length used for?

// This ensures that the loop will only run while index is a valid position in the string.

// Prevents accessing characters outside the string bounds (which would be undefined).
