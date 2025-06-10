const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
//first operation: num1 return 100 every time 
const num1 = maximum - minimum + 1
//second operation: function Math.random() generates a diffrent random number each time and multiply in 100
const num2 = Math.random() * (maximum - minimum + 1)
//third operation: floor() function round a number down to the nearest whole integer
const num3=Math.floor(num2)
//final operation : add the value of minimum var (1) to num3 and num4 is equal to num our result
const num4=num3+minimum
 
