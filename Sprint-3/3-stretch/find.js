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
//The variable index starts at 0 and increases by 1 every time the loop runs (index++).
//It keeps track of the current position in the string.
// b) What is the if statement used to check
//The if statement checks whether the current character (str[index]) is equal to the one we’re searching for (char).
//If it is, we immediately return index.
// c) Why is index++ being used?
//It moves to the next character in the string during each loop iteration.
//Without it, the loop would never move forward — it would keep checking the same character forever (infinite loop 🔁
// d) What is the condition index < str.length used for?
//That’s the loop condition — it keeps the loop running as long as index is less than the length of the string.
//Once index equals str.length, it means we’ve checked every character, and the loop stops.
