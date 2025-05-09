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
/*
At starting of program index= undefined and start from 0 then 1 and increase by 1 every time till 7 as start looking for char 'u'
and it find u in string at 7th index and return 7. for char 'z' it will look in whole string and index will start from 0 to 16 as string length is 16.
but 'z' is not present so return -1.
*/
// b) What is the if statement used to check
/*
it will check the current char Index  match char.if it match it will return index of that char from String else return -1
*/
// c) Why is index++ being used?
// To increment index value .so we can check whole string and loop can continue till last char of string .
// every time with index++ ity gave new index for next character in String.
// d) What is the condition index < str.length used for?
//It insure loop will stop when our index is equal to the length of string.eg: 16<16 
// it will stop as string length is 16 and char is not found index will reach 16.
