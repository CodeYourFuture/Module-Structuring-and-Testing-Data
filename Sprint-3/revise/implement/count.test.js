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
function countChar(str, char) {
  let count = 0; // This will store the number of times `char` appears in `str`.

  // We go through every character in the string.
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) { // If the current character matches `char`
      count++; // Increase the count by 1
    }
  }

  return count; // Return the total number of times `char` appeared
}

// Test the function with different examples:
console.log(countChar('aaaaa', 'a')); // It should print 5 because 'a' appears 5 times
console.log(countChar('hello world', 'o')); // It should print 2 because 'o' appears twice
console.log(countChar('hello world', 'z')); // It should print 0 because 'z' is not in the string
console.log(countChar('aAaA', 'a')); // It should print 2 because 'a' appears twice (it's case-sensitive)
console.log(countChar('aaaaaa', 'b')); // It should print 0 because 'b' is not in the string

  // Test 1: Multiple occurrences of the character
  test('counts multiple occurrences of the character', () => {
    expect(countChar('aaaaa', 'a')).toBe(5); // 'a' appears 5 times
  });

  // Test 2: No occurrences of the character
  test('returns 0 when the character does not appear', () => {
    expect(countChar('hello world', 'z')).toBe(0); // 'z' does not appear
  });

  // Test 3: Case-sensitive check (lowercase vs uppercase)
  test('is case-sensitive', () => {
    expect(countChar('aAaA', 'a')).toBe(2); // only lowercase 'a' should be counted
  });

  // Test 4: Empty string
  test('returns 0 for an empty string', () => {
    expect(countChar('', 'a')).toBe(0); // No characters in an empty string
  });

  // Test 5: Character appears at the beginning, middle, and end of the string
  test('counts occurrences correctly when character appears in multiple positions', () => {
    expect(countChar('banana', 'a')).toBe(3); // 'a' appears 3 times in 'banana'
  });

  // Test 6: Character appears once
  test('counts one occurrence of the character', () => {
    expect(countChar('hello', 'e')).toBe(1); // 'e' appears once in 'hello'
  });

  // Test 7: Special characters in the string
  test('counts occurrences of special characters', () => {
    expect(countChar('!@#$$@!', '@')).toBe(2); // '@' appears 2 times
  });
