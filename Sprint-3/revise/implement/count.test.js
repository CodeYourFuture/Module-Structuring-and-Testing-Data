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

const countChar = require('./count');

const currentOutput = countChar("aaaaa", "a");
const targetOutput = 5;

test('This test will check if the number of characters is being counted', () => {
    expect(currentOutput).toEqual(targetOutput);
})

const currentOutput2 = countChar("abcdef", "z");
const targetOutput2 = 0;

test('This test will check if the character is not found in the string', () => {
    expect(currentOutput2).toEqual(targetOutput2);
});

const currentOutput3 = countChar("aAaaAaA", "a");
const targetOutput3 = 4;

test('This test will check if the function is case-sensitive', () => {
    expect(currentOutput3).toEqual(targetOutput3);
});

const currentOutput4 = countChar("112233112233", "1");
const targetOutput4 = 4;

test('This test will check if the function counts multiple occurrences of a number', () => {
    expect(currentOutput4).toEqual(targetOutput4);
});

const currentOutput5 = countChar("", "1");
const targetOutput5 = 0;

test('This test will check if the function counts multiple occurrences of a number', () => {
    expect(currentOutput5).toEqual(targetOutput5);
});
