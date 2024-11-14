const movieLength = 53; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // There are 6 variable declarations in the program.

// b) How many function calls are there?
    // There are no function calls.

// c) Using documentation, explain what the expression movieLength % 60 represents
    //The expression is meant to find the reminder when the value in movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //The variable totalMinutes is assigned to the 'difference between the value in totalMinutes and remainingMinutes divided by 60'.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //The variable result represents the total time of the movie in Hours minutes and seconds. The name I could think of is, #totalMovieTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    //The code works for all the values of movieLength, because if the movieLength is less than one hour, the result will be in 0:minutes:seconds and so on.