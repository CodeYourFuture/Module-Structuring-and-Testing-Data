const movieLength = 34; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
// There are 6 variable declarations

// b) How many function calls are there?
// There is no function call.

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
// That is the remainder operator and outputs the leftover after division of one operand by the other.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//It takes the total movie duration in seconds and removes the remainder that would come about if the
//total seconds were divided by 60: That way, line4 is sure to bring a whole number back.  

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//It represents the movie duration in the format; HH:MM:SS. A good name would be "movieduration"

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
// Yes it will as long as the minimum movielength is 1 sec. The divided operand will always be returned if the dividing operand can go into it.