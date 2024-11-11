let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.
var initials =
  firstName.slice(0, 1) + middleName.slice(0, 1) + lastName.slice(0, 1);
