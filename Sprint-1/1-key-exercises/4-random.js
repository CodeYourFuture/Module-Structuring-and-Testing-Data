const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// In this exercise, you will need to work out what num represents?

//is a random integer between 1 and 100,inclusive;

// Try breaking down the expression and using documentation to explain what it means

//math.random() generates a random floating point number between 0 and 1(exclusive);
//(maximum - minimum +1) calculates the range of the random number;
//Math.random()*(maximum - minimum +1) ensures that the generated number is within the specified range;
//Math.floor() rounds down the number to the nearest integer;
//+minimum shifts the range of values from 0-99 to 1-100;

// It will help to think about the order in which expressions are evaluated

// Try logging the value of num and running the program several times to build an idea of what the program is doing
//The final value of num will be a random integer between 1 and 100 ,inclusive.  num could be any of the following values ( it 's just an examples): 45, 100, 23 , 56 etc..
