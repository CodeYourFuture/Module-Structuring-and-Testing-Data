const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents? Num represents a randomly selected number from >=1 till <=100
// Try breaking down the expression and using documentation to explain what it means. 
// Function Math.random() generates a decimal number between 0 to 1 which is 0 to 0.9999
// Funcion (maximum-minimum + 1). Therefore it is 100 - 1 + 1 = 100
// The * sign will multiply the random number with 100 which becomes 0 to 99.99
// The function Math.floor will unconditionally round it down. Hence it will be 0 to 99
// + minimum will add 1 to the new rounded up number Hence the old rance 0 - 99 will now become 1 to 100
// It will help to think about the order in which expressions are evaluated
// Done - Try logging the value of num and running the program several times to build an idea of what the program is doing
