const movieLength = 8820; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 6 variables
// b) How many function calls are there?
// 1 function - line 10
// c) Using documentation, explain what the expression movieLength % 60 represents
//In this expression movieLength divide to 60 (based on the every minutes is 60 seconds) then return remainder of division
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// In this line , it return complete minutes by calculating remain seconds divide by 60.
// e) What do you think the variable result represents? Can you think of a better name for this variable?
//movie length with 3 parts, hour:minute:second , name >  movieDuration
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//