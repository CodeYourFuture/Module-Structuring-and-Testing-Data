const movieLength = 10000; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
    // there are 6 variable declarations in this program.

// b) How many function calls are there?
    //1

// c) Using documentation, explain what the expression movieLength % 60 represents
    // The expression utilizes the modulus operator % which returns the value reminder after dividing the movielenght by 60

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    //the expression calculate the total minutes by converting the remaining seconds to minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // movie duration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // This code will work for all values.
