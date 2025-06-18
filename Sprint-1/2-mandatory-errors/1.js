// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//It would be impossible to reassign a variable age because it is declared by a const.  Const keyword creates a variable that cannot be reassigned after it has been assigned a value.
//On the console.log(); a "TypeError: Assignment to constant variable." will show if code run.
//The solution would be to allow the let keyword to reassign the age variable and initialized a new value.  Because let allows the variable to be reassigned multiple times.

let age = 33;
age = age + 1;
console.log(age);
