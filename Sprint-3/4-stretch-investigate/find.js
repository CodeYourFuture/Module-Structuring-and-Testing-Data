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
//1- declare and assign let index = 0;
//2-compare with  str.length and if it was less than str.length  assign index=index+1

// b) What is the if statement used to check
// It checks either the value of input parameter (char) is equal to the value of index character of the str input parameter.

// c) Why is index++ being used?
//To check all the characters in str one by one

// d) What is the condition index < str.length used for?
//It is Used for checking every single character of string "str" from first to end order.
