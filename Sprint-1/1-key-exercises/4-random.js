const minimum = 1;
const maximum = 100;

// This line generates the random integer between maximum and minimum (inclusive)
const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// Math.random() returns a floating point number between 0 and 1
// (maximum - minimum + 1) scales a random number to a specific range. The result is a random decimal number between 0 and (maximum - minimum + 1)
// Math.floor() round the scaled random number to the nearest whole number
// + minimum shifts the range from 0...N to minimum... maximum. It ensures the result starts from the desired minimum value.

// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
