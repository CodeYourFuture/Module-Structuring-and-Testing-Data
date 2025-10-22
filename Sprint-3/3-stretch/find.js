// Function to find the first occurrence of a character in a string
function find(str, char) {
  // Start searching from index 0
  let index = 0;

  // Loop through the string until the end
  while (index < str.length) {
    // Check if the current character matches the target
    if (str[index] === char) {
      return index; // Return the index if found
    }
    index++; // Move to the next character
  }

  // Return -1 if character is not found
  return -1;
}

// Example calls
console.log(find("code your future", "u")); // 5 (first 'u')
console.log(find("code your future", "z")); // -1 (not found)

/* 
Explanations:

a) How the index variable updates during the call to find? index variable: Tracks the current position in the string during the search.
b) What is the if statement used to check? if statement: Checks if the current character matches the one we're looking for.
c) Why is index++ being used? index++: Increments index by 1 to move to the next character in each iteration.
d) What is the condition index? condition index < str.length: Ensures the loop stops when we reach the end of the string to prevent errors.
*/
