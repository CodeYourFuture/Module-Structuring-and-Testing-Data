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
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return `${char} appears ${count} times in "${str}"`;
}

console.assert(
  countChar("laka", "a") === 2,
  'Test failed: "a" should appear 2 times in "laka"'
);
console.assert(
  countChar("luke", "u") === 1,
  'Test failed: "u" should appear 1 time in "luke"'
);
console.assert(
  countChar("heLLo", "l") === 0,
  'Test failed: "l" should appear 0 times in "heLLo" (case-sensitive)'
);
console.assert(
  countChar("banana", "a") === 3,
  'Test failed: "a" should appear 3 times in "banana"'
);
console.assert(
  countChar("abc", "z") === 0,
  'Test failed: "z" should appear 0 times in "abc"'
);
console.assert(
  countChar("Mississippi", "s") === 4,
  'Test failed: "s" should appear 4 times in "Mississippi"'
);
