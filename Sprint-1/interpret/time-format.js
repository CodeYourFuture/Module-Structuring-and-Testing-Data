const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    //  There are 6 variable declarations

// b) How many function calls are there?
    //  The only function call is console.log()

// c) Using documentation, explain what the expression movieLength % 60 represents
    // The % oeprator returns the remainder left over when one number is divided by a second number. movieLength % 60 is looking for how many seconds are left over when the movieLength is divided by 60(makes a minute).

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //  It is the movieLength minus the remaining seconds from the previous calculation. The number left should now be perfectly divisible by 60. The number that is assigned will then be the minutes portion of the movie length.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    //  result should output a sting that shows the movie length is a more standard time. I would rename the variable to movieRunTime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // There would be some strange results, remainingMinutes and remainingSeconds can return a single digit. The code would then look odd.