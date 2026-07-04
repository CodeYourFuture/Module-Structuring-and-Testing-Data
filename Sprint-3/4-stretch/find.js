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
// During the call to find(str, char): index starts at 0 and on each loop iteration, the function checks if str[index] is equal to char. if it is not, index is incremented by 1 (index++) and the loop continues until either a match is found or index reaches str.length. If a match is found, the function returns the current value of index. If no match is found after checking all characters, the function returns -1.
// C O D E  Y O "U" R    F U T U R E
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 => MATCH FOUND --> return index = 7

// b) What is the if statement used to check
// The if statement checks if str[index] is equal to char. This implies whether the current character in the string matches the character we are searching for. If it does, the function returns the current index. If not, the loop continues to the next character.
// c) Why is index++ being used?
// index++ is used to increment the index variable by 1 after each loop iteration and this is done to move to the next character in the string for comparison with char. This enables the function to check each character in the string sequentially until a match is found or the end of the string is reached.
// d) What is the condition index < str.length used for?
// The condition index < str.length is used to ensure that the loop continues to run as long as the index is less than the length of the string. This prevents the function from trying to run indefinitely and ensures that it only checks valid indices within the bonds of a given string. Therefore, the loop will terminate when index reaches str.length, indicating that all characters have been checked without finding a match.
