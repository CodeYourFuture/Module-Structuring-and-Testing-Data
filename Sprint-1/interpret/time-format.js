const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

    // there are 6 variable declaration :
    //     line 1) const movieLength
    //     line 3) const remainingSeconds
    //     line 4) const totalMinutes
    //     line 6) const remainingMinutes
    //     line 7) const totalHours
    //     line 9) const result

// ------------------------------------------------------------------------------------------
// b) How many function calls are there?

    // Only one :
    //     line 10: console.log()

// ------------------------------------------------------------------------------------------
// c) Using documentation, explain what the expression movieLength % 60 represents

    // It calculates leftover of movieLength's value division by 60, which is 24 here :

    // 8784 / 60 = 1146 --> 146 * 60 = 8760 --> 8784 - 8760 = 24

    // it means after converting movie length seconds to minutes, we have 24 seconds left.

// ------------------------------------------------------------------------------------------
// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

    // It calculates total full minutes.
    // it subtract remainingSeconds value from movieLength value first, then divides it into 60 to convert seconds to minutes

    // 8784 - 24 = 8760 --> 8760 / 60 = 146

    // it means movie has 146 minutes (we calculated remaining seconds, therefor movie is 146 minutes and 24 seconds)

// ------------------------------------------------------------------------------------------
// e) What do you think the variable result represents? Can you think of a better name for this variable?

    // It represent movie length in standard time format hours:minutes:seconds
    // I believe better name for this variable is:
    //     formattedMovieLength
    // which describes the value inside variable clearly

// ------------------------------------------------------------------------------------------
// f) Try experimenting with different values of movieLength. Will this code work for all values of movieLength? Explain your answer

    // 1) Its not working for float values, but still we can use Math.floor() to solve this issue.
    // 2) although a movie wont exceed 24 totalHours, but I believe defining days variable is good idea to make our code more general and accurate.