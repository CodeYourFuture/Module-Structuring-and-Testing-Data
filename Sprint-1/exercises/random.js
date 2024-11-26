const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1))+minimum;

//num1=Math.random()

//console.log(num1)
console.log(num)


// Step 1: The built function Math.random() returns a floating point number in the range [0, 1), i.e. 0 is a possible outcome, but 1 is not inclusive.
// Step 2: (Math.random() * (maximum - minimum + 1)) will evaluate to a floating point number between the minimum number and maximum number inclusive because of the plus 1.
// Step 3: Math.floor(Step2). The built in function Math.floor() drops the floating point part and return integer between minimum and maximum inclusive.
// Step 4: Therefore, the value of num will be a random integer between 1 and 100.

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
