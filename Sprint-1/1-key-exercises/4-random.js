const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num)
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//ANSWER
//the first and second line are variable declaration and each have a value assigned to them.
//next let me breakdown the code in line 4

// Math.floor() 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//According to MDN the Math.floor() method always rounds down and returns the largest integer less than or equal to a given number.
//eg. Math.floor(2.6) is 2.

//Math.random()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//According to MDN this method gives a random number between 0 and 1 excluding 1. giving unique number every time it is called.
//eg. 0,0.23 , 0.55, 0.99 , 0.01 ...

//now i will break it to solve it
//Math.random() * (maximum - minimum + 1) = Math.random() * (100-1+1) = Math.random()*100 
//Math.random()*100  gives random number between 0 to 99 (inclusive).

//Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
//This is the full code of line 4 it is Math.floor(result in line 27)+1
//when we round the result of line 27 to the smallest integer the minimum is 0 and maximum is 99 
//but when we add 1 to it the range of our out put will be changed to 1 to 100
//therefore the output will be from 1 to 100.