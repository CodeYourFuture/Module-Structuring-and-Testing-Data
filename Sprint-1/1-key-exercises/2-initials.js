let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

let initials = firstName[0] + middleName[0] + lastName[0]; // Get the first letter of each name and combine them

console.log(initials); // this will print "CKJ"

// we can also use firstName.charAt(0);  // "C"
// but using "[]" is more easy and modern
// "+" joins characters
