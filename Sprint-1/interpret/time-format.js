const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//  Answer : there are 6 variable declarations

// b) How many function calls are there?
// Answer: zero function call

// c) Using documentation, explain what the expression movieLength % 60 represents
// Answer: % is a modulus operator, it returns integer remainder of 2 operands , here 8784 % 60 is 24 
//  used to calculate the remaining seconds (24 sec)

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// Answer: it means total movie length in minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// Answer: variable result represents total duration of a movie in hr:min:sec format. If I get a chance to rename 
// a variable result then I would go for either totalDuration or movieDuration

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Answer: Yes, definitely it works for any number of values of movieLength and even I tried with differnt values
// as movieLength is a const variable we are not reassigning or calculating in between the program so it works for all values