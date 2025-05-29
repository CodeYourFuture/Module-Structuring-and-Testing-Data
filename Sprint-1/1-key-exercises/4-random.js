const minimum = 1;
const maximum = 100;


for (let i=0; i<100; i++) {
    const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log(num);
}

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// Math.floor(Math.random() * (100-1+1))   + 1
// Math.floor((Math.random() * 100))    + 1
// round down the value of((a random 0<=float<1 * 100)), then + 1
// round down(0<=float<100), then + 1
// num is a random integer between 1 and 100