// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2)); // if its const it will throe an TypeError you cant assign a const variable later on
  const minutes = time.slice(3, 5);


  // for am and pm periods
  const period = hours >= 12 ? "pm" : "am"; // if hours is greater than or equal to 12, it's pm, otherwise it's am

  // to convert hours from 24-hour format to 12-hour format
  if (hours === 0) {
    hours = 12; // if hours is 0, it should be 12 in 12-hour format
  } else if (hours > 12) {
    hours = hours - 12;
  }

  // for format hours to always be 2 digits
  const padHours = hours.toString().padStart(2, "0");

  return `${padHours}:${minutes} ${period}`;   
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "12:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);    

const currentOutput5 = formatAs12HourClock("13:20");
const targetOutput5 = "01:20 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);