const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


/*
1,maximum-minimum-> gives us the range
2,maximum-munimum+1-> gives us the increment of the range by 1
3,Math.random()-> generte random numbers from 0 up to 0.99 or between 0 and 1 excluding 1
4,(Math.random()*(maximum-minimum+1))-> it gives us the product of randowm number and the range+1 or the range incremented by one
5,Math.floor()->It roundes down to the nereast whole number of the above product statement
6,num-> it generates the random integer between 1 and 100 that will be happend by adding the minimum  or 1 to 0-99 value of the above expression

 */

console.log(num)