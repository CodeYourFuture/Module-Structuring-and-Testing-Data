const minimum = 1;
const maximum = 100;
// Generate a random integer between minimum and maximum (inclusive)
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
 

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

/*
Explanation:

num represents a random whole number between 1 and 100 inclusive.

How it works:

1. (maximum - minimum + 1)
   Calculates how many numbers are in the range.
   100 - 1 + 1 = 100

2. Math.random()
   Generates a decimal number such that:
   0 ≤ value < 1

3. Multiply:
   Math.random() * 100
   Produces a decimal between 0 and 99.999...

4. Math.floor()
   Removes the decimal part, giving an integer between 0 and 99.

5. + minimum
   Shifts the range from 0–99 to 1–100.
6.  When running the program multiple times, num changes each time.
   The value is always a whole number between 1 and 100.*/