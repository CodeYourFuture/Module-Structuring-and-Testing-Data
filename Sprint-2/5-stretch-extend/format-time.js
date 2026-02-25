// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); 
  const minutes = time.slice(3, 5); 
  let ampm = "am";
  let newHours = hours;

  if (hours === 0) {
    newHours = 12; // midnight
  } else if (hours === 12) {
    ampm = "pm"; // noon
  } else if (hours > 12) {
    newHours = hours - 12;
    ampm = "pm";
  }

  const showHours = newHours.toString().padStart(2, "0");
  return `${showHours}:${minutes} ${ampm}`;
}

// Now let's test different times

console.log(formatAs12HourClock("00:00"));
console.log(formatAs12HourClock("00:01"));
console.log(formatAs12HourClock("08:00"));
console.log(formatAs12HourClock("11:59"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("13:45"));
console.log(formatAs12HourClock("23:14"));
