let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = firstName.charAt(0)+middleName.charAt(0)+lastName.charAt(0);
// or
let initials = firstName[0] + middleName[0] + lastName[0];
// or but rarely used and not recommended because it might cause bugs
let initials = firstName[0].concat(middleName[0], lastName[0]);

// https://www.google.com/search?q=get+first+character+of+string+mdn

