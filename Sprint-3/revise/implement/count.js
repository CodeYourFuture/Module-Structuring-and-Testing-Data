// implement a function countChar that counts the number of times a 
//character 
//occurs in a string

function countChar(str, char) {
  let count = 0;

  // Iterate over each character in the string
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }

  return count;
}

// Scenario: Multiple Occurrences
const testString1 = "aaaaa";
const testChar1 = 'a';
console.log(countChar(testString1, testChar1)); // Output: 5

// Scenario: No Occurrences
const testString2 = "paralelepipedo";
const testChar2 = 'z';
console.log(countChar(testString2, testChar2)); // Output: 0

module.exports = countChar;

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps
// within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char
// (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
