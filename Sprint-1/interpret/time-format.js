const movieLength = 999999; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;
console.log("the total" + totalMinutes);

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the ode and then answer the following questions

// a) How many variable declarations are there in this program?
//  6 variabls

// b) How many function calls are there?
//    1
// c) Using documentation, explain what the expression movieLength % 60 represents
//   The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. It always takes the sign of the dividend.fb

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//  calculate the total minutes by subtracting remainingSeconds from movieLength and then dividing by 60 to convert the remaining seconds into minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?
// its using tamplat to store variable and any tex /the better name could be movieRuntime

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
//   yes will work/but with negative numbers gives unexpected resultscls
