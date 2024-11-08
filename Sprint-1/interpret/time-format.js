const movieLength = 9875; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// 5

// b) How many function calls are there?
// 1

// c) Using documentation, explain what the expression movieLength % 60 represents
// calculate the remainder when movieLength is divided by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// calculate total minutes by subtracting the remaining seconds from the total seconds and dividing it by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//formatted time in hh:mm:ss
//formattedTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// it works for positive integer values
// not working well with negative values or extremely large numbers