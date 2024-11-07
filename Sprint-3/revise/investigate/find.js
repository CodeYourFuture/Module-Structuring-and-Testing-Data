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
// index variable starts from 0(indicates to the first character in "str") and increments by 1 untill it equals to the length of the "str".
// b) What is the if statement used to check
//For each character inside the "str", it compares if it is the same as "char" value or not. When it finds the first matched character, it returns the index of that character.
// c) Why is index++ being used?
//index++ is the same as index=index+1. Whenever we use a loop(while,if,do while,...) we need to start with  a first number and end up whith a last number and also define how to reach the last number with starting from first number, which in this case is by incrementing the index variable by 1(index++).
// d) What is the condition index < str.length used for?
//it checks if it is end of the "str"
