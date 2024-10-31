const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

// FROM WHAT I CAN SEE. NUM IS A NUMBER GENERATED WITH THE RANDOM FUNCTION. NUM IS A VALUE BETWEEN 1 - 100.
// Try breaking down the expression and using documentation to explain what it means

//MATH.FLOOR MAKES SURE THAT A WHOLE NUMBER IS RETURNED. IT RETURNS THE SMALLEST WHOLE NUM POSSIBLE WHEN POSITIVE.
//MATH.RANDOM RETURN A DECIMAL POINT LESS THAN 1
// MAX-MIN +1 , We will get a number between 1 and 100 adding the min again makes sure that 100 is included in the range
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num);