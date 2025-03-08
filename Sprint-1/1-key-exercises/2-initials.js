
// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.


// https://www.google.com/search?q=get+first+character+of+string+mdn



function getInitials(firstName, middleName, lastName) {
    return firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
}

let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

let initials = getInitials(firstName, middleName, lastName);

console.log(initials); // Output: "CKJ"
