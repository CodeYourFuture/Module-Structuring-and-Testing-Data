// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//TypeError: Assignment to constant variable.
//This error is caused by the wrong reassignment of variable 'age'. It is a constant that cannot be reassigned.
//So the error prompted when the second line code try to reassign the variable value.
//In this case, I would use let age instead of const age to assign age and set its value.