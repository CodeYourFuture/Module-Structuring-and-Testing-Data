const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

console.log(num); // outputs a random integer between 1 and 100 (inclusive)

/*
1. Math.random()
Returns a floating-point number between 0 (inclusive) and 1 (exclusive).
2. (maximum - minimum + 1)
Calculates the size of the range (the number of possible values).
3. Math.random() * (maximum - minimum + 1)
Scales the random number to the desired range.
In this case: Math.random() * (100 - 1 + 1) → Math.random() * 100
So now the result is between 0 and 99.999...
4. + minimum
Shifts the range up by the minimum value.
So 0–99 becomes 1–100
5. Math.floor(...)
Rounds the result down to the nearest whole number.
So now we get an integer between 0 and 99 inclusive
*/
