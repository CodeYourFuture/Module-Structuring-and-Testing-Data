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

const countChar = require("./count");

describe("countChar Tesrs", () => {
  test("Multiple Occurrences", () => {
    expect(countChar("Let's gooooooooooooo!", "o")).toBe(13);
    expect(countChar("Oh, nooooo!", "o")).toBe(5);
    expect(countChar("Freeeeeeeeeedom!!!", "e")).toBe(10);
  });

  test("Single Occurrences", () => {
    expect(countChar("Who let the dogs out", "d")).toBe(1);
    expect(countChar("867-5309", "8")).toBe(1);
    expect(countChar("How bizarre!", "b")).toBe(1);
  });

  test("No Occurrences", () => {
    expect(countChar("Rashaad loves coding", "f")).toBe(0);
    expect(countChar("React is better than Angular", "d")).toBe(0);
    expect(countChar("Of course JavaScript is better", "j")).toBe(0);
  });
});
