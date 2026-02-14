// trying to create an age variable and then reassign the value by 1

//const age = 33;
//age = age + 1;

/* the mistake in the above code is the use of const which we use only to save the constant values
which we don't want to change in the future; therefore, in the above example we would declare age
as a variable rather than constant to solve the issue.*/

let age = 33;
age = age + 1;
console.log(age);
