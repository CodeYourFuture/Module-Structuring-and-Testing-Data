const movieLength = 8784; // length of movie in seconds

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

// Answers:
// a) There are 5 variable declarations: movieLength, remainingSeconds, totalMinutes, remainingMinutes, totalHours
// b) There is 1 function call: console.log()
// c) movieLength % 60 finds leftover seconds that don’t fit into a full minute
// d) totalMinutes gives the number of complete minutes by removing extra seconds
// e) result is the formatted time (HH:MM:SS); a better name could be formattedTime
// f) Code works for any non-negative movieLength, but not for negative values