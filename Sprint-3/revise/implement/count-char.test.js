// implement a function countChar that counts the number of times a character occurs in a string

const countChar = require("./countChar");



test("Checks for Multiple Occurrences, then correctly count overlapping occurrences", () => {
    const currentOUtput = countChar("azania", "a");
    const targetOutput = 3;

    expect(currentOUtput).toEqual(targetOutput);
});

test("Checks for No Occurrences, if the character does not exist, it should return 0", () => {
    const currentOUtput = countChar("azania", "u");
    const targetOutput = 0;

    expect(currentOUtput).toEqual(targetOutput);
});

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
