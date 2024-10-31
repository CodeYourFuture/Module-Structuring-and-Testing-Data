const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?5

// b) How many function calls are there?1

// c) Using documentation, explain what the expression movieLength % 60 represents?The expression movieLength % 60 calculates the remainder when movieLength (the total length of the movie in seconds) is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean? line 4

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//he variable result holds a string representation of the movie's length in the format hours:minutes:seconds.
//A more descriptive name could be formattedMovieDuration, which clearly indicates that the variable stores the formatted duration of the movie.
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer:The code will work for any non-negative  integer value 
