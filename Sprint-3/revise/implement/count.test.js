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
function countChar(string, char) {
  let j = 0;
  for (let i = 0; i <= string.length; i++) {
    if (string[i] === char) j = j + 1;
  }
  return j;
}

test("the number of times character occurs in a string should be 3", () => {
  expect(countChar("you are my best friend", "e")).toBe(3);
  expect(countChar("Just tell me STH", "S")).toBe(1);
  expect(countChar("Just tell me STH", " ")).toBe(3);
});
test("the number of times character occurs in a string should be 0", () => {
  expect(countChar("we don't know who the winer is!", "q")).toBe(0);
  expect(countChar("I love java script", "A")).toBe(0);
  expect(countChar("Python", " ")).toBe(0);
});
