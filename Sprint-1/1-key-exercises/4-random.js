const minimum = 1;
const maximum = 100;
// Random integer in range from 0 to 1 is generated with the help of ".random()" function of Math module
// this value is multiplied onto 100 ( (maximum - minimum + 1) with current values of min and max gives 100)
// result of this multiplication is rounded with the help of function ".floor()" of Math module
//In order to see multiple result was used for loop and 'console.log' function.
for (let i = 0; i < 100; i++) {
    const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(num);
}

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
