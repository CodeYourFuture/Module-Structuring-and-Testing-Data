// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// Explanation:
// The 'const' keyword creates a constant variable, which means its value cannot be reassigned after initialization.
// Since we're trying to update 'age' with a new value, we should use 'let' instead of 'const'.

let age = 33;
age = age + 1;
