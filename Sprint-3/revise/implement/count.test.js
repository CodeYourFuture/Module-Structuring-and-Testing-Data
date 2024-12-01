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
//---------------------------------------------------------------------------------------------------

//// Converts a number into its English word representation

function countChar(string, charToCount) {
  const count = string.split("").filter((char) => char === charToCount).length;
  console.log(count);
  if (count > 0) {
    return `"${charToCount}" appears ${count} times in "${string}"`;
  } else {
    return `No occurrences of "${charToCount}" were found in "${string}".`;
  }
}
//Test

describe("countChar", () => {
  test('returns "j" appears 1 time in "Sanandaj"', () => {
    expect(countChar("Sanandaj", "j")).toBe(
      '"j" appears 1 times in "Sanandaj"'
    );
  });

  test('returns "u" appears 2 times in "codeyourfuture"', () => {
    expect(countChar("codeyourfuture", "u")).toBe(
      '"u" appears 3 times in "codeyourfuture"'
    );
  });

  test('returns "Y" appears 1 time in "NewYork"', () => {
    expect(countChar("NewYork", "Y")).toBe('"Y" appears 1 times in "NewYork"');
  });

  test('returns "i" appears 2 times in "United Kingdom"', () => {
    expect(countChar("United Kingdom", "i")).toBe(
      '"i" appears 2 times in "United Kingdom"'
    );
  });

  test('returns No occurrences of "g" were found in ""', () => {
    expect(countChar("", "g")).toBe('No occurrences of "g" were found in "".');
  });

  test('returns No occurrences of "w" were found in "United State"', () => {
    expect(countChar("United State", "w")).toBe(
      'No occurrences of "w" were found in "United State".'
    );
  });
});
