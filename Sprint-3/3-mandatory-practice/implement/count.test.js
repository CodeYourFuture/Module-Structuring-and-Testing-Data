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

/*test("should count multiple occurrences of a character", () => {
  const str = "aaaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(6);
});
test("should count multiple occurrences of a character", () => {
  const str = "sftyeh";
  const char = "s";
  const count = countChar(str, char);
  expect(count).toEqual(1);
});*/
test("should count occurrences of a character", () => {
  expect(countChar("aaaaaa", "a")).toEqual(6);
  expect(countChar("sftyeh", "s")).toEqual(1);
});
// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.
test("should return zero for no occurrences of a character", () =>{
  const str1= "aaaaa";
  const char1 = "s";
  const count1 = countChar(str1, char1);
  expect(count1).toEqual(0);

});