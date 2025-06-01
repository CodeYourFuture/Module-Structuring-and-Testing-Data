const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num)
//num is a random number between the minimum and  maximum.
// 1. Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
// 2. (maximum - minimum + 1) Calculates the range of values, including both ends.
    // For 1 to 100, this is:
    // 100 - 1 + 1 = 100
    //3- Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
      // example Math.floor(50.9) = 50    
