const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


//ANSWERS:
// Num represents a random whole number(integers).  In which in this case it can be between 1 to 100.
//Now let me break it down;

//This const minimum = 1; and this const maximum = 100; represent the range from which i want my random numbers to come from.

//This command Math.random() generates a random decimal number from 0(being inclusive) to 1(but not inclusing 1) e.g 0.23, 0.87, 0.001 or 0.999 but it will never generate 1. 
// This command (maximum - minimum + 1) is a calculation of the Maximum and Minimum number i.e, 100-1+1=100
// This command Math.floor helps to remove any decimal point and round numbers down to the nearest whole number. e.g from 45.9 to 45
// This command +Minimum helps to add the minimum number in our range inorder to increase the numbers to 100(incusive)

console.log (num)

//After logging and running num, I had these series of numbers: 12, 66, 36,64,9,91....