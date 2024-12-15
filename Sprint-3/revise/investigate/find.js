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
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

/* My answer
a) The index refers to the position of a character and will loop to check each character in the string while no character matches are found.
b) The index will be returned when a character match is found. If no match is found, -1 will be returned.
c) If no match is found, it will increment by 1 to check the next character.
d) The while loop is coded to run for as long as the index is smaller than the length of the string
meaning that it will check for matches and if no match is found, run for the length of the string.




