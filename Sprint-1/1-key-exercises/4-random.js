const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing
/*
num is a variable which is used to assign values of multiple function like Math.floor, Math.random, and calculations.
Math.random(): This function generate a random decimal number between 0  and 1.
(maximum-minimum +1): It will cover the range of possible numbers from minimum to maximum inclusively.
(Math.random()* (maximum-minimum +1)): It will take  assigned values and make the calculation.First bracket will resolve (100-1+1)=100
and this value will multiply with math.random(). example: Math.random() generate 0.5, the result would be: 0.5*(100-1+1) =50.5
Math.floor(): it will give  round of decimal values  to the nearest whole number.
so Math.floor(50.5)-> 50
+ minimum: add minimum value.
so finally num value will be between 1 to 100.
I tried to run it multiple time and got different output based on input.
*/
