const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

    // There are five variable declarations in this program:
    // const movieLength
    // const remainingSeconds
    // const totalMinutes
    // const remainingMinutes
    // const totalHours
    // const result

// b) How many function calls are there?
    // There are zero function calls in this code. 
    // All operations are performed using operators and string interpolation, without calling any built-in functions.

// c) Using documentation, explain what the expression movieLength % 60 represents
    // This gives the number of seconds left over after calculating complete minutes

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
    // it converts movieLength seconds into minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
    // total run time

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
    // movieLength is 0, the output will be 0:0:0, which is correct. e.g 01:40:00 run time
