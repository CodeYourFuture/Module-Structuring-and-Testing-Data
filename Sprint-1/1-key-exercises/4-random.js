const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?

//After running this exercise a few times I can see that 'num' is a random number between 1 and 100

console.log(num);

// Try breaking down the expression and using documentation to explain what it means

// at the top we can see our minimum and maximum values which are fixed therefore Constants,
// we then have our variable num which is assigned a value using the Math object and its methods floor and random
// Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive)
// We then multiply this random number by the range of our desired numbers which is (maximum - minimum + 1)

// It will help to think about the order in which expressions are evaluated

//the same as math, multiplication is done before addition and subtraction
// so we first calculate (maximum - minimum + 1) which is (100 - 1 + 1) = 100
// then we multiply the random decimal number by 100 which gives us a number between 0 and 100 (but not including 100)
// then we apply Math.floor() to round down to the nearest whole number, giving us a number between 0 and 99
// finally we add the minimum value (1) to shift the range up, resulting in a final value between 1 and 100 (inclusive)

// So in summary, 'num' is a random integer between 1 and 100, inclusive of both endpoints.


// Try logging the value of num and running the program several times to build an idea of what the program is doing

//you can see how random function generates different numbers each time the program is run
//and how the range is always between 1 and 100

