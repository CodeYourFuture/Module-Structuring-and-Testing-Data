// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;


// The error "Assignment to constant variable" occurs because const is used to declare a constant value that cannot be changed.
// Since the code tries to reassign the value on line 4 (age = age + 1), the program crashes.
// To fix this, we would use let, which allows for variable reassignment.