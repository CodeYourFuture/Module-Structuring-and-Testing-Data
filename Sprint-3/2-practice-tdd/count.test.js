// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string `str`,
// And a character `char` that occurs one or more times in `str` (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count occurrences of `char`.

/*test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});*/

describe("countChar", () => {
  test("counts repeated characters in a simple string", () => {
    expect(countChar("aaaaa", "a")).toEqual(5);
  });

  test("counts characters in a mixed string", () => {
    expect(countChar("absankama", "a")).toEqual(4);
  });

  test("counts characters including spaces", () => {
    expect(countChar("ab san kama", "a")).toEqual(4);
  });

  test("counts characters in string with symbols", () => {
    expect(countChar("a-+&£$%?/|b san kama", "a")).toEqual(4);
  });

  test("returns 0 when character is not found", () => {
    expect(countChar("-+&£$%?/|b sn km", "a")).toEqual(0);
  });

  test("returns 0 for empty string", () => {
    expect(countChar("", "a")).toEqual(0);
  });

  test("is case sensitive", () => {
    expect(countChar("AaAa", "a")).toEqual(2);
  });
});

// Scenario: No Occurrences
// Given the input string `str`,
// And a character `char` that does not exist within `str`.
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of `char` were found.
