let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// Answer:

// There are two ways to access an individual character in a string. The first is the charAt() method. Another -
// is to treat the string as an array-like object, where individual characters correspond to a numerical index.
// I choose the second one.

let initials = firstName[0] + middleName[0] + lastName[0];
console.log(initials);

// https://www.google.com/search?q=get+first+character+of+string+mdn
