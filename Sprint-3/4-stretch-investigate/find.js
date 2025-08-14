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
//The index starts of at 0 and then goes through the loop to check for "u" character. The count of the index variable
// goes up by 1 every time it goes back in the loop. The position of character "u" is 7 therefore the index value of 7 
//is returned. When the character "z" is is being looped in the string and keeps on going through the loop, when the character 
//is not found the -1 is returned.


// b) What is the if statement used to check
// it's checking if the character at the position of the string matches what function is looking for, when 
// it reaches that character the value is returned, in this case it's 7 and when it's no longer found it comes
// back with -1.

// c) Why is index++ being used?
// it is used to add 1 to the index variable every time it goes through the loop to the point the character is found.

// d) What is the condition index < str.length used for?
// The index value at the function starts with 0, this is needed so the loop can go ahead to look for the character through
// the string. Index = 0 and it has to be less than str.length.
//
