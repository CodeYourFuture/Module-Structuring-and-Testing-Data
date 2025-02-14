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
//the index variable starts from 0 and updates within the while loop until it reaches str.length value with an increment 1 (index ++)
//the update continues as long as it didn't find a char in str  on that specific index. if it finds the character it immediately returns that index and stops the function.
// b) What is the if statement used to check
//it is used to check if the character is found in that specific index(i.e str[index]) while looping using the while loop.
// c) Why is index++ being used?
//it is used to change/increment the value of index so the while loop executes for all index values
// d) What is the condition index < str.length used for?
//it is used to loop from initial value of the index as long as it is less than length of the string/str.
