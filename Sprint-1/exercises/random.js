const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);


// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of 
// what the program is doing

/* 
    Math.floor() Math.floor() rounds down the decimal result from the previous step to the 
        nearest integer. This step ensures the random number is a whole number.
        have a random integer between 0 and 99, inclusive.

    Math.random() will take a number between 0 (inclusive) and 1 (no inclusive) eg. this 
        will be decimal numbers (0.345, 0,123)
   
    Math.random() * (maximum - minimum + 1): is multiplied by 100, creating a new range. 
        Now, Math.random() * 100 generates a random decimal number between 0 and 100 
        (not including 100). Example 0.0, 25.4, 99.99, etc.

    (maximum - minimum + 1)  This part calculates the range of numbers you want to include,
        which is from 1 to 100. Subtracting minimum from maximum gives 99, and adding 1 results
        in 100. So, this range means we’re looking to generate a random number between 0 and 99
        and then shift it to between 1 and 100.

    + minimum:
        Adding minimum (which is 1 in this case) shifts the entire range up by 1.
        Now, instead of getting a range of 0–99, the range becomes 1–100.
        so, num will now be a random integer between 1 and 100.

*/

// in this example taken from mdn we see the same function being called and will generate a 
//random number between the minimum and maximum

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

console.log(getRandomArbitrary(minimum, maximum));