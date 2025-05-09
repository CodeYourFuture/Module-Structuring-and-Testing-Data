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
//index starts at 0 and increases by 1.
//The loop continues until char is found or index reaches the length of str.

// b) What is the if statement used to check
//The if statement checks whether the character at position index in str matches the given char.

// c) Why is index++ being used?
//Increasing by 1.

// d) What is the condition index < str.length used for?
//This condition ensures the loop does not go beyond the last character of str.
