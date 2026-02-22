// trying to create an age variable and then reassign the value by 1

let age = 33;
age = age + 1;

// Explanation: 
// The error is "TypeError: Assignment to constant variable." 
// This occurs because we used 'const' to declare the 'age' variable. 'const' creates a constant whose value cannot be reassigned after its initial creation.