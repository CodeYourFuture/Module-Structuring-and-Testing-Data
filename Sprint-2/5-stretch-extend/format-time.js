// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
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

//We can have a problem with number 12
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); // Extracts the hour part from the input time
  if (hours === 12) {
    return `${time} pm`; // Special case for 12:00 (12 noon)
  }
  if (hours > 12) {
    return `${hours - 12}:00 pm`; // For hours > 12, convert to 12-hour format and append "pm"
  }
  return `${time} am`; // For hours <= 12, simply append "am"
}