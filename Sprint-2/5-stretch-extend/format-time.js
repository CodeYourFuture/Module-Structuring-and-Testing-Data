// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  let suffix = 'am';
  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    suffix = 'pm'; // noon
  } else if (hours > 12) {
    hours -= 12;
    suffix = 'pm';
  }

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  return `${formattedHours}:${minutes} ${suffix}`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${cu