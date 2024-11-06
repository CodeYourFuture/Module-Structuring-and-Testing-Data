const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60; // calculate remaining seconds
const totalMinutes = (movieLength - remainingSeconds) / 60; // calculate total minutes
const remainingMinutes = totalMinutes % 60; // calculate remaining minutes
const totalHours = (totalMinutes - remainingMinutes) / 60; // calculate total hours
const totalDays = Math.floor(totalHours / 24); // calculate total days
const remainingHours = totalHours % 24; // calculate remaining hours

const formattedTime = `${totalDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`;
console.log(result);
