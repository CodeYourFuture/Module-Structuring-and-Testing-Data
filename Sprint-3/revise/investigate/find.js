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

// // a) How the index variable updates during the call to find
// The index variable starts at 0 (the first character of the string). Each time the loop executes, the value of index increments by 1 due to the index++ statement. The loop continues to iterate through the string, checking each character until it either finds a match or reaches the end of the string.

// For example, with the call find("code your future", "u"), index starts at 0 and increases by 1 each time. The loop checks the characters "c", "o", "d", "e", " ", and so on until it reaches the character "u", at which point it returns the index.

Let's break down the code step by step and address each of the questions:

The Code:
javascript
Copy code
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
// a) How the index variable updates during the call to find:
// The index variable starts at 0 (the first character of the string). Each time the loop executes, the value of index increments by 1 due to the index++ statement. The loop continues to iterate through the string, checking each character until it either finds a match or reaches the end of the string.

// For example, with the call find("code your future", "u"), index starts at 0 and increases by 1 each time. The loop checks the characters "c", "o", "d", "e", " ", and so on until it reaches the character "u", at which point it returns the index.

// b) What is the if statement used to check:
// The if statement if (str[index] === char) checks if the current character in the string (at position index) matches the character char that we're searching for. If the condition is true, it means we've found the character in the string, and the function immediately returns the current index.
// c) Why is index++ being used:
// The index++ statement is used to increment the index by 1 on each iteration of the loop. This ensures that the loop checks the next character in the string after each iteration. Without this, the loop would check the same character repeatedly, causing an infinite loop.
// d) What is the condition index < str.length used for:
// The condition index < str.length is used to control the loop's termination. It ensures that the loop continues running as long as the index is less than the length of the string (str.length). Once the index reaches the length of the string, it means we've checked all characters, and the loop stops. If no match is found by that point, the function returns -1, indicating that the character is not in the string.