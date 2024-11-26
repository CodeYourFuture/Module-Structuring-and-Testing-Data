const movieLength = 2784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//5

// b) How many function calls are there?
//6
// c) Using documentation, explain what the expression movieLength % 60 represents
//divided by 60, it's  convert seconds to a time format

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//It will get the value of movieLength subritae  the value from
//remainingMinutes and divide it by 60. It is transforming seconds in minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Should be named movieDuration because is time total of the movie.

// f) Try experimenting with different values of movieLength.
//Will this code work for all values of movieLength? Explain your answer

//Result for the function with the const movieLength = 8784; =
//2:26:24

//Result for the function with the const movieLength =  2784; =
//0:46:24
