const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let range = maximum - minimum + 1;
let rand = Math.random() ; // generates a random number between 0 and 1 (not including 1)
let rand100 = rand * range; // generates a random number between 0 and 100 (not including 100)
let rand99 = Math.floor(rand100); // generates a random number between 0 and 99 (not including 100)
const num = rand99 + minimum;



console.log(`The random number between 0 and 1   is ${rand}`); 
console.log(`The random number between 0 and 100 is ${rand100}`);
console.log(`The  random number mutipled with range is  ${rand99}`);
console.log(`The random number is ${num} between ${minimum} and ${maximum}`);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
