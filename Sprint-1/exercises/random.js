const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//Answer

//Math.random(): This generates a random decimal number between 0 (inclusive) and 1 (exclusive). For example, it could return 0.345, 0.9, etc.

//Math.random() * (maximum - minimum + 1):

//Range Calculation: The expression (maximum - minimum + 1) calculates the range of numbers, which in this case is 100 - 1 + 1 = 100.
//Random Scaling: Multiplying Math.random() by 100 scales the random decimal up to a value between 0 and 100 (exclusive). This means we get numbers like 0.345 * 100 = 34.5 or 0.9 * 100 = 90.0.
//Math.floor(...):

//This rounds down the scaled random number to the nearest whole number, resulting in a random integer between 0 and 99.
//Math.floor(...) + minimum:

//Adding minimum (which is 1) shifts the range up by 1, making the possible values from 1 to 100 inclusive.
//Conclusion:
//num is a random integer between 1 and 100, inclusive. Running the program several times will show different values within this range. Each time you run the program, num will hold a new random integer between 1 and 100.

console.log(num);




