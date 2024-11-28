const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
`5`

// b) How many function calls are there?
`1`

// c) Using documentation, explain what the expression movieLength % 60 represents
`movieLength % 60 represents the remainingSeconds which is 24 seconds`


// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
`the totalMinutes expression means the movieLength(8784%60) - remainingSeconds(24) / 60 which equals to 146 total minutes`

// e) What do you think the variable result represents? Can you think of a better name for this variable?
`I think it represents the total run time of the movie in hours, minutes and remaining seconds - a better variable name could be totalRun`

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
`Yes it will work. The code is designed to work with different values of movieLength because it calculates the number of hours, minutes, and seconds based on the input value`
