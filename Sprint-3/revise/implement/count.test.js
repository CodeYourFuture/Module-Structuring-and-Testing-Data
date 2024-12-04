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


/*
create a function called countChar(str, char) the str is changed to lowercase.
the char is used to search the string for its match and if present a increment a var for count.
the return will be the count and a string giving a brief report of the findings.

i can write the test cases in this file but the requirements didnt actually ask for tests but guess its implied so lets get a basic test

    const str = "targeted character";
    const charToCount = 'a';
    const result = countChar(str, charToCount);
    console.log(result); 

    we expect to get a result of `$result`
*/
