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
   // the index start with 0 and adds 1 each time through the loop index ++
   // if char is found in position 3 for example index will go from 0,1,2 and finally reach 3 which the character match


// b) What is the if statement used to check
   // the if statement check if the character current position (str[index]) is equal the char im looking for
   // if they match the function return the index 


// c) Why is index++ being used?
   // increase the value of index by 1 each loop 


// d) What is the condition index < str.length used for?
   // ensure the loop doesn`t past the last character in the string 




   