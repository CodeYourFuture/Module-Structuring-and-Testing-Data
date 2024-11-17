// Function to count occurrences of a character in a string
function countChar(str, char) {
    let count = 0;
    
    // Loop through the string and check for occurrences of char
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    
    // Return the final count
    return count;
  }
  
  // Test cases
  
  // Scenario 1: Multiple Occurrences (Including Overlaps)
  console.log(countChar('aaaaa', 'a'));  // Expected Output: 5
  console.log(countChar('abcabcabc', 'a'));  // Expected Output: 3
  
  // Scenario 2: No Occurrences
  console.log(countChar('hello world', 'z'));  // Expected Output: 0
  
  // Scenario 3: Case-Sensitivity Test
  console.log(countChar('abcABCabc', 'b'));  // Expected Output: 2
  
  // Scenario 4: Empty String
  console.log(countChar('', 'a'));  // Expected Output: 0
  
  // Scenario 5: Single Character String
  console.log(countChar('a', 'a'));  // Expected Output: 1
  console.log(countChar('b', 'a'));  // Expected Output: 0
  
