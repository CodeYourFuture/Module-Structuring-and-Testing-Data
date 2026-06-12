// trying to create an age variable and then reassign the value by 1


let age = 33;
age = age + 1;

/*
The original error occurred because age was declared using const.

Variables declared with const cannot be reassigned.

The statement age = age + 1 tried to assign a new value to age,
which caused a TypeError: Assignment to constant variable.

Changing const to let allows the value to be updated.
*/
