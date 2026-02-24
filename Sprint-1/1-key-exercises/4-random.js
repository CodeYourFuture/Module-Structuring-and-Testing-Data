const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
//results: 4,23,91,46 the program is giving you a random number while math.random give you a random decimal number math.floor rounds the total number up
// 1. Math.random() - should produce random decimal number [0,1)
// 2. Math.random() * (maximum - minimum + 1) - should produce [0,1) * (100-1+1)
// 3. Math.floor(Math.random() * (maximum - minimum + 1)) - Math.floor() rounds down to the nearest integer so it won't be 88.88 but just 88
// 4. Math.floor(Math.random() * (maximum - minimum + 1)) + minimum - adds minumin to have an integer between 1 and 100 inclusive. [0,100]