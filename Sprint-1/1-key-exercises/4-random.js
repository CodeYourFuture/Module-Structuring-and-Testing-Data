const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
// console.log(num);



// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num is a random integer between minimum and maximum(both inclusive)
// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive)
const randomNumberBasic = Math.random();
console.log(randomNumberBasic);

// (maximum - minimum + 1) calculates the range of numbers we want(minimum and maximum inclusive)
//(100 - 1 + 1 = 100)

// Math.random() * (maximum - minimum + 1) multiplies the random number by the range
const randomNumberScaled = randomNumberBasic * 100;
console.log(randomNumberScaled);

// Math.floor() Rounds the result down to the nearest whole number, converting it to an integer(num)
const randomInteger = Math.floor(randomNumberScaled);
console.log(randomInteger);

// + minimum: Shifts the range so it starts from the minimum value which is 1
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomIntInRange = getRndInteger(1, 100);
console.log(randomIntInRange);

// num is randomIntInRange