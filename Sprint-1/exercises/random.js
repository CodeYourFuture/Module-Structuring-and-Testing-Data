/*const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

 In this exercise, you will need to work out what num represents?

num represents a Random number and it will it rounds down to the nearest whole number 
and if the number is negative it will round it to the nearest number exemple -4.7 the resoult will be -5 */

// Try breaking down the expression and using documentation to explain what it means:

/* Match.floor=  is a JS function which rounds a number down to the nearest integer
  also it removing the decimals.
  if number is Positive it will round to the nearest. 4.7 = 4 4.3=4
  And if the number is negative it will round it to nearest = -4.7 = -5

Match.random= is a js function that generates random numbers 
between 0 and 1.
To generate random in others values we need to add * (and value of the values up we want it)
example Random between 0 and 200 = 

const randomBetween1And200 = Math.random() * 200;

+ minimum shifts the range so that the minimum value starts from 1 instead of 0


 
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing


done */

const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// gisdellabella@Giss-MBP exercises %
// gisdellabella@Giss-MBP exercises % node random.js
// 4
// gisdellabella@Giss-MBP exercises % node random.js
// 8
// gisdellabella@Giss-MBP exercises % node random.js
// 61
// gisdellabella@Giss-MBP exercises % node random.js
// 9
// gisdellabella@Giss-MBP exercises % node random.js
// 37
// gisdellabella@Giss-MBP exercises %
