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



// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.



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

// Scenario: Case Sensitivity
// Given the input string str with mixed case letters,
// And a character char in a specific case (e.g., 'H' in 'Hello'),
// When the function is called with these inputs,
// Then it should return the count while respecting case sensitivity (e.g., 'H' != 'h').


// Scenario: Empty String
// Given an empty input string str,
// When the function is called with any character char,
// Then it should return 0, as no characters are present in the empty string.

// Scenario: Special Characters
// Given an input string str containing special characters,
// And a character char that is also a special character,
// When the function is called with these inputs,
// Then it should correctly count the occurrences of the special character.

// Scenario: Consecutive Occurrences
// Given an input string str where the character char occurs consecutively,
// When the function is called with these inputs,
// Then it should correctly count all consecutive occurrences of char.
