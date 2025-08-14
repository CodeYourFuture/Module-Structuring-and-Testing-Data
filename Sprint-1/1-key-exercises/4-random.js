const minimum = 1;
const maximum = 100;
// Random float from interval [0, 1)  -  greater than or equal to 0 and less than 1
// is generated with the help of ".random()" function of Math module
// this value is multiplied onto 100 ('maximum - minimum + 1' with current values of min and max) -->
// --> result will be in range [0, 100)
// function "Math.floor()" rounds down and returns the largest integer --> 
// --> less than or equal to a given number.
// possible results that will be given to a "num" variable are in range [1,100]
// In order to see multiple result was used for loop and 'console.log' function.
for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(num);
}

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
