const movieLength = 8784; // length of movie in second

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//Answer: 6times

// b) How many function calls are there?

//answer: only one console.log

// c) Using documentation, explain what the expression movieLength % 60 represents

//answer:
// the modulo operator (%) finds the remainder after division

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//answer:
//we  first have to calculate the full minutes by subtracting remaining seconds that do not make up to a whole minute then divided by  60 to get the total in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//Answer:
//I think a name that gives more context at a glance is preferred like  "hoursMinutesSeconds"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//Answer: 
//yes it works with different values 