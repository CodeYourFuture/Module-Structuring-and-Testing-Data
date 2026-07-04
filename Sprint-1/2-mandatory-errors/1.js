// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;
// The above code has a TypeError:Assignment to constant variable.
//The error is because age is declared as a constant variable, which mean cannot be reassigned. To fix this error, we can declare age as a let variable instead. 