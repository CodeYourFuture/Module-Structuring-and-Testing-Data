const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// The variable num represents a random integer between the minimum (1) and maximum (100)

//

//By multiplying Math.random() by (maximum - minimum + 1), we are scaling the range of random numbers.
//Then, using Math.floor rounds the decimal down to the nearest whole number, resulting in an integer between 0 and 99.
//Finally, adding minimum adjusts this range to [1, 100].
