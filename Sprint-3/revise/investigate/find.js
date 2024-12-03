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
// 1. The index variable starts at 0. During each iteration of the while loop, if the character at str[index] is not equal to char, the index is incremented by 1 using index++. This continues until either: A match is found (str[index] === char), at which point the function returns the index, or the loop completes because index reaches str.length, indicating the character wasn’t found
// b) What is the if statement used to check
// 2. The if statement checks whether the character at the current position of the string (str[index]) matches the target character (char). If it does, the function immediately returns the current value of index.
// c) Why is index++ being used?
// 3. index++ is used to increment the index variable so the while loop can move to the next character in the string. Without this, the loop would keep checking the same position indefinitely, resulting in an infinite loop.
// d) What is the condition index < str.length used for?
// 4. The condition index < str.length ensures that the loop continues only while index is a valid position within the string. If index reaches str.length, it means all characters in the string have been checked, and the target character wasn’t found. At this point, the function exits the loop and returns -1.
