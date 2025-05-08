const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = ` the movies length is ${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 declarations

// b) How many function calls are there?
// 0

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// the % divides and finds the remainder of the operation

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It means that totalMinutes equals the movieLength minus the remainingSeconds and the answer of that is divided
// by 60

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// The Variable result represents the length of the movie in time format, a better name would be time
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes