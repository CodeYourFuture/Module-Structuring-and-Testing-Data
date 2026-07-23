// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string `str` and a single character `char` to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
test("should count multiple occurrences of a character", () => {
 const str = "aaaaa";
 const char = "a";
 const count = countChar(str, char);
 expect(count).toEqual(5);
});


// Scenario: No Occurrences
test("should return 0 when character does not exist in string", () => {
 const str = "hello";
 const char = "z";
 const count = countChar(str, char);


 expect(count).toEqual(0);
});

