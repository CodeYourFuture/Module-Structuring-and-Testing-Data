const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// console.log(num);

// 1) Num represent a randomly  generated whole  number between maximum and minimum //

// 2) Firstly, Math.random create a random number between 0 to 1 then using a maximum and minimum,which gives us range.
//  Multiplying them create a random number inside that range.  Math.floor remove decimal parts and give us whole number
//  finally we add minimum number ( + minimum),which start from  a minimum value. Therefore num represent a whole number.
