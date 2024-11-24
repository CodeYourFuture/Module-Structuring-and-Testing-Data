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
// The index starts at 0 (the first position in the string).
// Inside the while loop, each time the loop runs, index is incremented by 1 due to the index++ statement. This moves the index one step forward, allowing the next character in the string to be checked.




// b) What is the if statement used to check
// The if statement checks whether the character at the current position (str[index]) is equal to the character you're searching for (char).
// The condition str[index] === char will return true if the character at str[index] matches the given char. If it’s true, the function will return the current index, signaling that the character has been found.


// c) Why is index++ being used?
// index++ is shorthand for index = index + 1. It increments the value of index by 1 after each iteration of the while loop.
// This is necessary to ensure the loop checks every character in the string. Without this increment, the loop would be stuck at the first character and never move forward, causing an infinite loop.


// d) What is the condition index < str.length used for?
// The condition index < str.length is the condition that controls the continuation of the while loop.
// It ensures that the loop only runs as long as index is less than the length of the string (str.length). Once index reaches the length of the string, it means we've checked every character, and the loop stops.
// If the loop exhausts all characters and doesn't find a match, the function will return -1, indicating that the character is not in the string.
