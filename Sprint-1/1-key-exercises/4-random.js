const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a variable that will be assigned an integer number after the operators are done.
// Math.floor() rounds a decimal to its nearest number to make it an integer. ex = 1.2 => 1.
// Math.random() is a method used to create numbers between (0-1) and usually it creates a decimal like (0,2) or etc.
// each time I run it, I got different number as Math.random() generates different number each time we run it.

//to respond to the question "What would happen if we did Math.floor(1.9);?"
// ===> the method Math.floor() rounds the decimal number down always, in this case the final output would be ==> 2 as our 1.9 would be 1 after our method round it and add it to our minimum number which is 1 so ==> 1 + 1 = 2.

// In addition our formula works we wont have 191, if we had Math.ceil() then the result would exceed our maximum number.

// Response to question "What does the + minimum do here?"
// ===> + minimum shifts the range so that the smallest possible number is minimum instead of 0. so if we don't have it our range would be (0, 99) and this as we have 1 as minimum and 100 as maximum, if we don't add + minimum then our formula wont work as we are expecting.