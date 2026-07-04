const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const result = `${totalHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// a) There are 6 variable declarations: movieLength, remainingSeconds, totalMinutes,
//    remainingMinutes, totalHours, result.

// b) There is 1 function call: console.log(result) on line 10.

// c) movieLength % 60 uses the modulo (remainder) operator.
//    It gives the remainder after dividing movieLength by 60, i.e. the leftover seconds
//    that don't make a full minute.

// d) totalMinutes = (movieLength - remainingSeconds) / 60
//    First, the remaining seconds are subtracted so the value is an exact multiple of 60.
//    Dividing by 60 then converts the total seconds into whole minutes.

// e) result represents the movie length formatted as HH:MM:SS (hours:minutes:seconds).
//    A clearer name would be formattedDuration or timeDisplay.

// f) The code works for any non-negative integer value of movieLength.
//    It will not work correctly for negative values (a negative duration makes no sense)
//    but for any valid seconds value >= 0 the arithmetic is correct.
