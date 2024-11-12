const movieLength = 0; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

// There are about six variable declarations 

// b) How many function calls are there?

// There is a only one function call..the console.log function

// c) Using documentation, explain what the expression movieLength % 60 represents

// This expression represents a calculation that will return a remainder of movieLength seconds after it's divided by 60. The (%) modulus operator is used to find the remainder after dividing one number by another.  

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// It is to get totalMinutes by subtracting remainingSeconds from movieLength then divide the value by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// It represents how long the movie is or the total length of the movie. A better name could be movieHours 

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// The code works with any value, the smaller the value the smaller the movieLength 
