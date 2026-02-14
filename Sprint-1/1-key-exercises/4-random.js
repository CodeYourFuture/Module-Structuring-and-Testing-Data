const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//num in the above code represents integer numbers from 1 to 100
// Math.random() method used in the above code returns floating numbers between 0(inclusive) and 1(exclusive)
/*and (maximum - minimum + 1) will give use the number that when multiplied by values between 
0(inclusive) and 1(exclusive) we will get results from 0 to 99.99999999..... including any decimal values in between
and the Math.floor is used to get rid of the decimal values and return only numbers; so our
values will become 0 to 99 only numbers
and at the end part of the equation we are adding minimum value i.e. 1 which will result in
assigning values from 1 to 100 in num; that's why we are getting only values from 1 to 100 in our num
and every time we print the num in console.log() we can get any values between 1 to 100 depending on the radom value returned 
by the Math.random() method.*/
