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
/* a) how does the index variable update during the call to find?
index starts at 0, and it increases by 1 on each loop iteration using index++.
It keeps track of the current position in the string as you check each character.

b) What is the if statement used to check
This checks whether the character at the current index matches the target character. 
If it does, the function returns the index and stops running.

c) Why is index++ being used?
index++ increments the index by 1 after each check, so the loop continues moving forward through the string.
Without this, the loop would get stuck on the same character instead of running through the rest of the string.

d) What is the condition index < str.length used for?
This ensures the loop runs only while index is within the bounds of the string.
It prevents accessing characters beyond the end of the string.
*/
