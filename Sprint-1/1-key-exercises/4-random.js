const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?

//Num represents a random number between 1 to 100 inclde both becasue we are adding 1

// Try breaking down the expression and using documentation to explain what it means

//(maximum - minimum + 1) = get maximum number 100 extract the minimum 1 add +1 to incluide 100.
//+ minimum add 1

//math.radom = gets randm number between 0 and 1 but never 1 so we add +1 to incluide 1
//Math.floor= will raounds donw to the nearest whole number


// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
