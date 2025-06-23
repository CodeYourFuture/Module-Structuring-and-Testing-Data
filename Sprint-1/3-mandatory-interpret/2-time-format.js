const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//Answer: there are 6 of them (all 'const' in this context)

// b) How many function calls are there?

//Answer: 1 which is console.log(result);

// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//Answer, according to MDN, The remainder (%) operator returns the remainder left over when one operand is divided by a second operand. In simpler words, it's called the modulus operator, it’s a math operator that tells you the remainder left over after division. This means movieLength % 60 = 24

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

//Answer: const movieLength is subtrated from const remainingSeconds. The answer to this is then divided by 60 and stored in const totalMinutes. Therefore, this answers the question of "How many whole minutes are in this movie?"

// e) What do you think the variable result represents? Can you think of a better name for this variable?

//Answer: it's the the total time of the movie in hours, minutes and seconds. Perhaps showTime.

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

// Yes, it could work for a majority of movie lengths. I tried and it gave me the answer 0:0:20 to one. But this could have a few skewed looking lengths like 2:4:20
