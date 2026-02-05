let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

function getInitials(names) {
    let initials = "";
    for (const name of names) {
        initials += name.charAt(0)
    }

    return initials
}

let initials = getInitials([firstName, middleName, lastName]);
console.log(initials)

// https://www.google.com/search?q=get+first+character+of+string+mdn

