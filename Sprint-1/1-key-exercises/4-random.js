const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// minimum and maximum store the lowest and highest numbers that can be generated. 
// Math.random() generates a random decimal between 0 and 1. This value is multiplied by (maximum - minimum + 1) to produce a random number within the required range.
// Math.floor() rounds the result down to the nearest whole number producing a number from 0 to 99. 
// Minimum is then added, shifting the range to 1–100. This ensures that every whole number between 1 and 100 has an equal chance of being generated.