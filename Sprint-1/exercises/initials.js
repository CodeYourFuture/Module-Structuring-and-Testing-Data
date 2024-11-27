let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// to select the first character of each variable i will use the charAt() also known as character at method which is used to extract a  character at a specified index. 
let initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
// The console.log function in JavaScript is used to print (or log) messages to the console.
console.log(initials);
