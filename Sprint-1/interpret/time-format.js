const movieLength = -1; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//6
// b) How many function calls are there?
//1
// c) Using documentation, explain what the expression movieLength % 60 represents
//it divides movielength by 60 and then returns the remainder . this remainder will be the movie length in seconds

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//it takes away remaining seconds from the the movielenght and devids the result by 60 to get the movielength in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//it retains the movielenght in the format of hour:minutes:seconds
//we can use some other names insted of result, such as "movieduration"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//I tried these codes with different value of movielength(all numbers withou remainder and with remainder) and all worked properly
