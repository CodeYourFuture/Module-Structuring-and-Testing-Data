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

// a) How the index variable updates during the call to find a char

   // As the code runs, index starts from zero and runs until the length of the string, 
   // It starts from zero and in each loop it gets incremented until a char is found within the string.

// b) What is the if statement used to check
   
   // It checks if the char is in the string. If it exists.. next step is to return the index of the char.     


// c) Why is index++ being used?
  
  // To check if the given char is present starting from 0 till str.length.


// d) What is the condition index < str.length used for?

   // As long as index is less than the length of the string, keep looping until the char is found.

// Added explanation to the questions.