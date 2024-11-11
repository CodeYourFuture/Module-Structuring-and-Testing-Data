const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing



What Num represents is : 
Num represents the Math.floor() function that returns the highest integer that's less or equal to the value 
and the Math.random() function that generates any value between 0 and 1. The functions are then multiplied to result of the subtraction of this expression which represent the declared variables.  (maximum - minimum + 1)) + minimum;



Break down of the expression: 

A minimum variable was declared to be 1 
A maximum variable declared to be to be 100



The final variable , num  was declared to be Math floor(Math.random())
And as described before math floor returns the highest integer that's less or equal to the value while math.random generates any between 0 and 1.

Without these 2 functions this gives us a fixed output of 101, all the expression does is it assign operators to the declared variables and then gives us the answer. 
const minimum = 1;
const maximum = 100;
const num =(maximum - minimum + 1)) + minimum;
consol.log=(num) = 101



With the 2 functions it's a different expression because our answers are going to vary and change every time we log in the expression, as I ran the expression several times the answers i received were 96, 46, 7 and 72.  

That is because what math random does is it takes  the  (max-min +1) result multiply it with Math random thus ensuring that the result is between 0 and 1 

The math.floor rounds the result of the above expression to the nearest integer. 
const minimum = 1;
const maximum = 100;
const num =Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
consol.log = (num) 
