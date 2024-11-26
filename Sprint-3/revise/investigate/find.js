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
//answer:The index variable starts at 0 and is incremented by 1 with each iteration of the while loop. 
//This allows the function to check each character in the string, one by one, 
//until either the target character (char) is found or the end of the string is reached.


// b) What is the if statement used to check
//answer:The if statement checks whether the character at the current position (str[index]) is equal to the character we're looking for (char).
//If str[index] === char is true, the function immediately returns the index of that character. This is how it finds the first occurrence of the character.



// c) Why is index++ being used?
//answer:The index++ increments the value of index by 1. This is essential because it ensures the function progresses through each character in the string one by one, from the first to the last.
//Without index++, the loop would get stuck at the same character and never move to the next one.



// d) What is the condition index < str.length used for?
//answer:This condition checks whether the current index is within the bounds of the string.
//If index is less than the string's length (str.length), it means there are still characters left in the string to check.
//Once index reaches str.length, it indicates the end of the string, and if the character has not been found, the function returns -1.
