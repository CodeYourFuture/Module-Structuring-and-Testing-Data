let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// We are going to get the first character of each name by using the .charAt(0) method. And then we concatenate them. 

let initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
console.log(initials);   // This will log: CKJ  