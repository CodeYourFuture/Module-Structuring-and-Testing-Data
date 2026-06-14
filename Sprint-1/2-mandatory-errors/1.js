// trying to create an age variable and then reassign the value by 1

const age = 33;
age = age + 1;

//js:4
// age = age + 1;
//     ^

// TypeError: Assignment to constant variable.
// a number was declared using const (which cannot change) but here on line 4 (js:4) we tried reassigning it.
