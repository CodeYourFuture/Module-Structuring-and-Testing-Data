// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

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
test("should return  0 if no occurrences of a character", () => {
  const str = "bbbbbb";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Single Occurrence
test("should return 1 for a single occurrence of a character", () => {
  const str = "hello";
  const char = "e";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});

// Scenario: Case Sensitivity
test("should be case sensitive when counting characters", () => {
  const str = "Hello World";
  const char = "h";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Empty String
test("should return 0 when the input string is empty", () => {
  const str = "";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

// Scenario: Numeric Characters
test("should count numeric characters in the string", () => {
  const str = "123123123";
  const char = "2";
  const count = countChar(str, char);
  expect(count).toEqual(3);
});

// Scenario: Whitespace Characters
test("should count whitespace characters in the string", () => {
  const str = "a b c d e f ";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(6);
});

// Scenario: Edge Case - Character Not a Single Character
test('should throw error if char is not a single character', () => { 
  const str = 'hello';
  const char = 'll';
  expect(() => {
    countChar(str, char);
  }).toThrow('Character to find must be a single character');
 })
 
// Scenario: Special Case - Special Characters
test.each([
  { str: "!!!@@@###", char: "!", expected: 3 },
  { str: "$$$%%%^^^", char: "%", expected: 3 },
  { str: "&&&***(((", char: "(", expected: 3 },
])(
  "should count special characters correctly in '$str'",
  ({ str, char, expected }) => {
    const count = countChar(str, char);
    expect(count).toEqual(expected);
  }
);  
//Scenario: Invalid Input Types
test.each([
  { str: 12345, char: "a", error: "First argument must be a string." },
  { str: "hello", char: 5, error: "Second argument must be a string." },
  { str: [], char: "a", error: "First argument must be a string." },
  { str: "hello", char: {}, error: "Second argument must be a string." },
  { str: null, char: "a", error: "First argument must be a string." },
  {str: "hi", char: undefined, error: "Second argument must be a string." },
])("should throw error for invalid inputs", ({ str, char, error }) => {
  expect(() => {
    countChar(str, char);
  }).toThrow(error);
});
