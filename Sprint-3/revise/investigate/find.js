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


/*a) How the index variable updates during the call?
The index variable increases by 1 each time the character is not found at the current position in the string. 
It keeps incrementing until the character is found or the end of the string is reached.

b) What is the if statement used to check?
The if statement checks if the specified character exists in the string. 
If the character is found, it returns the index of that character.

c) Why is index++ being used? 
The index++ is used to move to the next position in the string for the next comparison, incrementing the index by 1.

d) What is the condition index < str.length used for? 
The condition index < str.length ensures that the loop continues as long as there are characters in the string. 
If the end of the string is reached, it exits the loop and returns -1, indicating that the character was not found.*/







