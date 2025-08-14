const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
6 declarations : movieLength,remainingSeconds,totalMinutes,remainingMinutes,totalHours,result
// b) How many function calls are there?
just 1 : console.log()
// c) Using documentation, explain what the expression movieLength % 60 represents
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators
It represents the remainder of division movieLength and 60 and in this example it represents 8784%60=24
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
change seconds to minutes without decimal point .if we devide 8784/60 the output will be 146.4 and by subtracting remaining seconds 
before deviding we can have an integer number 146 min
// e) What do you think the variable result represents? Can you think of a better name for this variable?
It shows the movie length in hours : minutes: seconds
variable name instead of result :  movieLengthHHMMSS
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer
I experimented this values: 0 ,9 ,-1,60,3600,15275,59
It works for all situations small digits ,zero , big digits , border lines like 60 , 3600 and I think it works properly.
