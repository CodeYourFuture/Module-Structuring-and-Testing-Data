const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num); // Output: A random number between 1 and 100

// In this exercise, you will need to work out what num represents?
// # num is a random integer between the specified minimum and maximum values (inclusive).

// Try breaking down the expression and using documentation to explain what it means
// # The expression Math.random() generates a random floating-point number between 0 (inclusive) and 1 (exclusive).
// # The expression Math.floor() rounds down to the nearest whole number.
// # The expression Math.random() * (maximum - minimum + 1) scales the random number to the desired range.
// # The addition of minimum shifts the range to start from the minimum value.
// # The final expression combines these elements to produce a random integer between the specified minimum and maximum values (inclusive).

// It will help to think about the order in which expressions are evaluated
// # The expression Math.random() * (maximum - minimum + 1) is evaluated first
// # Then Math.floor() is applied to the result to round it down to the nearest whole number
// # Finally, the minimum value is added to shift the range to the desired minimum value

// Try logging the value of num and running the program several times to build an idea of what the program is doing
// # Each time the program is run, num will output a different random integer between 1 and 100
// # You can also try changing the minimum and maximum values to see how it affects the output
// # For example, changing minimum to 10 and maximum to 50 will generate a random integer between 10 and 50
// # The program will still generate a random integer, but now it will be within the new specified range
