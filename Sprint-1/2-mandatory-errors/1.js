// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

// The error is TypeError: Assignment to constant variable.
// This is occurring as a constant variable cannot be reassigned
// line 4 is trying to reassign the constant variable age
// This could be navigated by using let instead of const, or assigning a new variable name for age + 1