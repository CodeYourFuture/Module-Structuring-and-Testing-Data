const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


const step1 = Math.random();  // get random number >=0 & <1
console.log(`The random number is ${step1}`);

const step2 = (maximum-minimum+1);
console.log(`The second step is ${step2}`); // subsctract (max from min) and add 1

const step3 = step1*step2;  // random number multiply by the result from step2
console.log(`The third step is ${step3}`);

const step4 = Math.floor(step3);    // round down the number and return largest or equal to given number
console.log (`The fourth step is ${step4}`);

const step5 = step4 + minimum    //add with the minimun number 
console.log (`The final step is ${step5}`);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
