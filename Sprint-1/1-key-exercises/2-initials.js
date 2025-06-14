let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

// You can use the charAt method to get the first character of each string
let initials = firstName.charAt(0) + middleName.charAt(0) + lastName.charAt(0);
// Alternatively, you can use bracket notation to access the first character of each string
let initials2 = firstName[0] + middleName[0] + lastName[0];
// Alternatively, you can use the slice method to achieve the same result
let initials3 = firstName.slice(0, 1) + middleName.slice(0, 1) + lastName.slice(0, 1);
// Alternatively, you can use the substring method to achieve the same result


