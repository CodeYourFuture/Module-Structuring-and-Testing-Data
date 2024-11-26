const movieLength = 9784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// b) How many function calls are there?

// c) Using documentation, explain what the expression movieLength % 60 represents

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// a) 6 varieble declaration

// b) one function call - console.log()

// c) it divides movielength by 60 which will separate the seconds which is not enough to be one minute
// we divided movielength by 60, every 60 will be a minute, the remainder is the the seconds not enough to be a minute. 
// for example 2:43:4  the 4 is teh remainder seconds
// This gives the remainder when movieLength is divided by 60, which is the number of seconds left after counting whole minutes. So remainingSeconds is the number of seconds in the final minute.


// d) it removes remaining seconds which is not enough to be a minute and then divide the seconds to 60 to make total mitutes
// Here, we subtract remainingSeconds from movieLength to get only the full minutes, then divide by 60 to convert those seconds to minutes.


// e) it is length of movie with hour minute and second - movie time

// f) yes it works
