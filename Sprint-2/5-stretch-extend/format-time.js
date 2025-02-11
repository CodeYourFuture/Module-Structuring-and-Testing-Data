// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5));
  if (hours == 0) {
    return `${hours + 12}:${minutes.toString().padStart(2, "0")} am`;
  } else if (hours == 12) {
    return `${hours}:${minutes.toString().padStart(2, "0")} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes.toString().padStart(2, "0")} pm`;
  }
  return `${hours}:${minutes.toString().padStart(2, "0")} am`;
}

const currentOutput = formatAs12HourClock("08:07");
const targetOutput = "8:07 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("00:00");
const targetOutput2 = "12:00 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("12:09");
const targetOutput3 = "12:09 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
