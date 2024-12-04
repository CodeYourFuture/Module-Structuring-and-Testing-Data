const movieLength = 8784; // length of movie in seconds

const remaining seconds = movie-length % 60;
const total minutes = (movie length - remaining seconds) / 60;

const remaining minutes = total minutes % 60;
const total hours = (total minutes - remaining minutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
 We have 5 variabale declarartions.

// b) How many function calls are there?
 The are no function calls

// c) Using documentation, explain what the expression movie-length % 60 represents
movie length is a variable that was assigned the value 8764, so the expression represents the movie length in seconds divided by 60 
and also giving us the reminder of that calculation using the modulo operator(%)



// d) Interpret line 4, what does the expression assigned to total minutes mean?
 As the  movieLength and remainingSeconds variables were declared in seconds line 4 is converting them into minutes by dividing them by 60.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
it represents the strings, another name  you can use is the time string

// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
I believe so because the code allows us to break down the total number of seconds into total hours, minutes, and seconds and also allows us to get accurate results for any given movie's length.
The modulo operation also improves our code's efficiency  because we can use the remainder of any value we punch in 
