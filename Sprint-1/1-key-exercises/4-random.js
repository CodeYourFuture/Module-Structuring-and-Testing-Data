const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
 


/*               Solution

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

step 1 =>  (maximum - minimum + 1)
    .Calculates the size of the range of numbers you want.
    .In this case:
        maximum - minimum = 100 - 1 = 99
        99 + 1 = 100
    .This means we're choosing from 100 possible values.

step 2 =>  Math.random() * 100
    . Math.random() returns a floating-point, pseudo-random number between 0(inclusive) and 1(exclusive), 
    .So multiplying it by 100 gives a random decimal between 0 and 99.999... (not including 100).

step 3=>Math.floor(Math.random() * 100)
    .Math.floor() Rounds the decimal down to the nearest whole number.
    .So the result is a whole number between 0 and 99.

step 4=> Math.floor(Math.random() * 100) + minimum = Math.floor(Math.random() * 100) + 1
    .Shifts the range upward to start at 1.
    .So the final result becomes an number between 1 and 100 (inclusive).  

Final Result:
num will be a random integer between 1 and 100 inclusive.
*/