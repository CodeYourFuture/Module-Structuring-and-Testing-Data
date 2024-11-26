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
// b) What is the if statement used to check
// c) Why is index++ being used?
// d) What is the condition index < str.length used for?

____________________________________SOLUTION_________________________________________________________

                                         /* Detailed Explanation
                                         
The function find searches for the first occurrence of a character (char) in a string (str). If found, it returns the index of the character; if not, it returns -1.

Analyzing Key Parts of the Code
How the index variable updates during the call to find:

The index variable is initially set to 0, which refers to the first character in the string.
In each iteration of the while loop, index is incremented (index++), moving to the next character position in str.
What the if statement is used to check:

if (str[index] === char) checks if the character at the current index matches the target character (char).
If there’s a match, the function immediately returns index, indicating where the character was found.
Why index++ is being used:

index++ is necessary to advance to the next character in the string. Without index++, the function would be stuck at the same position indefinitely, causing an infinite loop.
What the condition index < str.length is used for:

index < str.length ensures that the loop runs only while index is within the bounds of the string.
Once index equals the length of str, the loop stops because all characters in the string have been checked.
Execution Example
For find("code your future", "u"):

index starts at 0 and increases with each iteration.
When index reaches 9, str[9] is "u", which matches the target character.
The function then returns 9, which is the index of the first "u" in "code your future".
For find("code your future", "z"):

The loop iterates through all characters in "code your future".
Since "z" is not found, index eventually reaches the end of the string (index >= str.length), and the function returns -1.
*/