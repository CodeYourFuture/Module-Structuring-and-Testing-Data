const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
/*
 So before Math.floor method is exectued, we first run  math.random which randomly picks a number between 0-1, and then it is multiplied by 100. 
 Next, math.floor rounds down the number to the  nearest integer. Finally, 1 is added to the final value and stored inside num variable. 
*/
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
console.log(num);
