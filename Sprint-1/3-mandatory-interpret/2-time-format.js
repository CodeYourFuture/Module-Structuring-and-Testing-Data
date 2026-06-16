const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6 (the lines starting with const)

// b) How many function calls are there?
// line 10 - the log() function is called

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
//the modulo operator is for checking remainders in a division. so in this case we want to check what is the remainder if we divide the movieLength by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// movieLength is the length of the movie measured in seconds.
//  remainingSeconds is the seconds remaining after dividing the movieLength by 60 (so checking how many seconds remain after the rest fits into minutes)
//line 4 calculates the total number of minutes in a movie by taking away the trailing seconds (that would remain if we converted to minutes) and dividing that by 60 (since there are 60 seconds in a minute)

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//it gives us the length of a movie in the format of: hh:mm:ss
//maybe movieLengthInHMS or movieLengthFormatted

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//I think so. Unless a movie might be a year long, but to be fair, even then it works, only then we might need to introduce a day into the result.
//other issues might be if the variable movieLength is not valid such as negative number, or not a number, then there might be issues. This could be solved with validation
