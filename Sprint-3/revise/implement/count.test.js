// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
_________________________________________SOLUTION____________________________________________________

// Function to count occurrences of a character in a string
function countChar(str, char) {
    let count = 0; // Initialize count to 0
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // Check if the current character matches the search character
      if (str[i] === char) {
        count++; // Increment count if there's a match
      }
    }
  
    return count; // Return the final count
  }
  
  // Test cases
  console.log(countChar("aaaaa", "a")); // Output: 5
  console.log(countChar("hello world", "o")); // Output: 2
  console.log(countChar("hello world", "z")); // Output: 0
  console.log(countChar("JavaScript", "J")); // Output: 1
  console.log(countChar("CaseSensitive", "s")); // Output: 1
  
  /*
  Explanation of Key Lines
  Looping through the string: The for loop iterates through each character of str, comparing it to char.
  Condition check: if (str[i] === char) ensures case-sensitive matching. If it matches, we increment count.
  Return value: The function returns the total count, representing the number of occurrences of char.
  */