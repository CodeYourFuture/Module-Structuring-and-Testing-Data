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
//It's like counting steps: starts at step 0, then index++ makes it take one step forward to check the next character, repeating this until it finds a match.
// b) What is the if statement used to check
//The if statement looks to see if the letter at the current index (str[index]) is the same as the one we want (char). When it finds a match, we know where the character is
// c) Why is index++ being used?
//We need index++ so the loop doesn't get stuck checking the same index forever. It makes sure we move to the next character each time.
// d) What is the condition index < str.length used for?
//This tells the loop when to stop - basically "keep looking until you've checked the whole string." Without it, we might try to check places that don't exist in the string.
