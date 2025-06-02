// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

/*
I got this error message "TypeError: Assignment to constant variable." after running 
my code. It happened because when assigned a value to an identifer using const -short 
for constant - it emplies that we have no intention of changing the value. it remains 
constant. the second line the variable get reassigned a new value and therefore the 
error message above showed up.
To solve this issue the variable age could simply be declared via "let" as seen below:
*/

let age = 33;
age = age + 1;