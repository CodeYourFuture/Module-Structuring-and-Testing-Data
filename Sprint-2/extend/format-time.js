// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/// Wrote tests with Jest. All the tests are in the format-time.test.js file. All of them are passing.

function formatAs12HourClock(time24h) {
  // Split the time into hours and minutes
  const [hours24, minutes] = time24h.split(':');
  
  // Convert hours to number for easier manipulation
  let hours = parseInt(hours24);
  
  // Determine if it's am or pm
  let period = hours >= 12 ? 'pm' : 'am';
  
  // Convert 24h to 12h format
  if (hours === 0) {
    hours = 12; // Midnight case
  } else if (hours > 12) {
    hours = hours - 12;
  }
  
  // Format the time without leading zeros for hours
  return `${hours}:${minutes} ${period}`;
}

module.exports = { formatAs12HourClock };

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
