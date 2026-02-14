const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// breaking down the expressions:
// num is assigned the value of Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// (maximum - minimum + 1) calculates the range of possible values, which is 100 - 1 + 1 = 100
// Math.random() * (maximum - minimum + 1) scales the random decimal to the range of possible values, resulting in a number between 0 and 100 (exclusive)
// Math.floor() rounds down the scaled random number to the nearest whole number, giving us an integer between 0 and 99
// Finally, adding minimum (which is 1) shifts the range from 0-99 to 1-100, resulting in num being a random integer between 1 and 100 (inclusive)
console.log(num);
