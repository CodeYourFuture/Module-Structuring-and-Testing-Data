const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

console.log(num);

// num is a random integer between minimum and maximum, including both endpoints.
// Math.random generates random decimal numbers between 0 and 1.
// Math.floor() rounds a number down to the nearest integer.Example 12.8 is rounded to 12.
//(maximum - minimum + 1)= (100 - 1 + 1)= 100.... So the expression becomes (Math.random()*100)
//In the output I can see random numbers between 1 and 100.


