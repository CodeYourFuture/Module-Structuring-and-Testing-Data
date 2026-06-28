// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/*This threw the error TypeError: Assignment to constant variable because the line
 age = age + 1 attempts to change the value of age after a constant variable is created.
 Constant variables cannot be reassigned after initial value is set.*/