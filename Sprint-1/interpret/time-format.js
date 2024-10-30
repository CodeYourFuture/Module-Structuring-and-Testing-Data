const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
6 variables
// b) How many function calls are there?
1 function
// c) Using documentation, explain what the expression movieLength % 60 represents
It gives the number of seconds remaining after accounting for complete minutes.
1 min = 60 sec
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
This expression converts the total movie length from seconds to minutes.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
Result would show the total hours, minutes, and remaining seconds for movieLength.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
Yes, this code will work correctly.
It calculates the hours, minutes, and seconds regardless of the initial number of seconds.
Just if movieLength=0 then result=0:0:0
