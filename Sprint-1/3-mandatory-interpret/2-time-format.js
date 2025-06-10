const movieLength = 15; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
/*
For the piece of code above, read the code and then answer the following questions

a) How many variable declarations are there in this program?
There are 6 declaration.
    -movieLength
    -remainingSeconds
    -totalMinutes
    -remainingMinutes
    -totalHours
    -result

b) How many function calls are there?
There is just one function that is console.log


c) Using documentation, explain what the expression movieLength % 60 represents
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
movieLength is integer ant the value is 8784. % used for modular arithmetic. It's result is remainder for second.

d) Interpret line 4, what does the expression assigned to totalMinutes mean?
In this line, remainder seconds reduced from total duration and it provides minutes.

e) What do you think the variable result represents? Can you think of a better name for this variable?
result variable represents duration in time format. In daily life, people can understand duration in "hh:mm:ss" format easily.

f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
It doesn't work for all values, I tried fifteen minutes and it result was 0:0:15, so it is not proper time format

*/