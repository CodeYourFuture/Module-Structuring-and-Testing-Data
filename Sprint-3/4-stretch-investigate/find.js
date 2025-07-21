function find(str, char) {
  // Start searching from the first character (index 0)
  let index = 0;

  // Continue looping while index is less than the length of the string
  // This prevents us from going beyond the last character of the string
  while (index < str.length) {
    // Check if the current character matches the one we are looking for
    if (str[index] === char) {
      // If found, return the current index position
      return index;
    }
    // Move to the next character in the string
    index++; // This increments index by 1, so the loop moves through each character
  }

  // If we finish the loop without finding the character, return -1
  // This means the character does not exist in the string
  return -1;
}

// Test examples:
console.log(find("code your future", "u")); // Should output the first index of 'u'
console.log(find("code your future", "z")); // Should output -1 since 'z' is not in the string

/*
Explanation:
a) The 'index' variable starts at 0 and increments by 1 each loop (index++), allowing the function to check each character in the string.
b) The 'if' statement checks whether the current character (str[index]) matches the character we're searching for.
c) 'index++' is used to move forward to the next character in the string on each loop iteration.
d) The condition 'index < str.length' ensures the loop only runs while 'index' is a valid position inside the string, preventing errors.
*/

