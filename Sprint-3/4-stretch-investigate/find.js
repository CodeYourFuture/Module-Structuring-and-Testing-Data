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

// a) How the index variable updates during the call to find increases by 1 for each loop iteration, stop if str[index] === char
// b) What is the if statement used to check  Character in parameter str order from [0] to the end to be equal specific character in second parameter char.
// c) Why is index++ being used? to increment it so loop check each character in the string.
// d) What is the condition index < str.length used for? This condition checks index is still less then str.length during loop run. If condition true loop is running if false loop stopped
