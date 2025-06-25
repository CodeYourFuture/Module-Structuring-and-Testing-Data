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
//      index variable updated using the increment index++
// b) What is the if statement used to check
//      if statement check if the str[index] === char value which is 'u'
//      let's say str[0] means st[0] == c so, if compares if 
//      c === u it will return the index value which is the index of that letter.
// c) Why is index++ being used?
//      index++ used to increase the value of the index by 1 if the 'if condition' is false 
// d) What is the condition index < str.length used for?
//      index < str.length used to check that the index value still less than the length of the string
