const movieLength = 83939; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60; // converts seconds to minutes

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);
    
// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are six variable declarations in this program

// b) How many function calls are there?
// There is only one function call ==> console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
    // The the expression movieLength % 60 represents calculate the number of seconds remaining after converting  the movieLength from seconds to minutes

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
 // Line 4 converts movieLength(seconds) to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // The variable result formats the date in this format: h:minutes:seconds
    // Yes, we can give it the name formateDate for example

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
