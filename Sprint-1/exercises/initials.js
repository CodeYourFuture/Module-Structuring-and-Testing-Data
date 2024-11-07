let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

var firstInitial = firstName.slice(0,1);
var secondInitial = middleName.slice(0,1);
var thirdInitial = lastName.slice(0,1);
var allInitials = (firstInitial+secondInitial+thirdInitial);
console.log(allInitials);
