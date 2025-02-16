// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:
function countChar(str, char) {
  let count = 0; // Start with count at 0

  for (let i = 0; i < str.length; i++) { // Loop through each character in the string
    if (str[i] === char) { // If the character matches the one we're looking for
      count++; // Increase the count
    }
  }

  return count; // Return the total count
}

module.exports = countChar;

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("should return 0 when character does not occur", () => {
  const str = "hello";
  const char = "n";
  expect(countChar(str, char)).toEqual(0);
});

