const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?

    //Answer : num represents a random integer between 1 and 100


// Try breaking down the expression and using documentation to explain what it means

    //1- Math.floor(...) rounds the number down to the nearest whole number, giving an integer from 0 to 99.
    //2- Math.random()  generates a decimal number between 0 and 1.
    //3- Math.random() * (maximum - minimum + 1) make sure that decimal to a range from 0 up to (maximum - minimum + 1).



