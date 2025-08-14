// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/* TypeError: Assignment to constant variable
 The error occurs when trying to reassign a value to a variable that was declared as a const (constant). 
Constants cannot be reassigned after they are initialized.
age was initially declared as a const,
and since age is a const, attempting to update its value (age + 1) made JavaScript give a TypeError
*/