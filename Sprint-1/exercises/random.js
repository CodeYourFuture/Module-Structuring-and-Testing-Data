const minimum = 1;
const maximum = 100;

// const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const random = Math.random();  // Math.random() returns the decimal no b/w 0(inclusive) and 1(exclusive)
console.log (`Math.random is ${random}`);

console.log( `max - mim + 1 is ${(maximum - minimum + 1)}`); // this line evaluates the expression from left hand side ie, 100-1 = 99 + 1 =100
console.log( random * (maximum - minimum + 1)); // here 100 is multiplied by random value which is generated from random()

const num = Math.floor(random * (maximum - minimum + 1)) ; // then Math.floor rounds down the resulting decimal no to an whole no 
console.log(num);

const final_exp = num + minimum; // finally we are going to add minimum value which is 1 to the num variable.
console.log(final_exp);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
