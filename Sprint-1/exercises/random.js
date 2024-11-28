const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num)

// math.floor() = The Math.floor() function rounds down the number to the nearest whole number eg 50.78 to convert to 50.
// math.random() = This method generates a floating-point number between 0 (inclusive) and 1 (exclusive).
// maximum - minimum + 1 =  This expression calculates the range of possible values.
//In this case, it calculates 100 - 1 + 1, which equals 100. This means we want to generate numbers from 1 to 100.
// + minimum = we add the minimum value (which is 1) to the result from the previous step e.g 50 + 1 = 51
