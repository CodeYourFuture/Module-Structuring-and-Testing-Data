// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // Extract the hour part from the time string and convert it to a number
  const hours = Number(time.slice(0, 2));

  // If the hour is 0 (midnight), return 12 for hour and 'am'
  if (hours === 0) {
    return `12:${time.slice(3)} am`;
  }

  // If the hour is 12 (noon), return 12 for hour and 'pm'
  if (hours === 12) {
    return `12:${time.slice(3)} pm`;
  }

  // If the hour is greater than 12, convert to 12-hour format and use 'pm'
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, '0')}:${time.slice(3)} pm`;
  }

  // hours between 1 and 11
  return `${time} am`;
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

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("12:01");
const targetOutput5 = "12:01 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);
