// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  // If midnight (00), convert to 12 am
  if (hours === 0) {
    return `12:${minutes} am`;
  }

  // If noon (12), it stays 12 pm
  if (hours === 12) {
    return `12:${minutes} pm`;
  }

  // If greater than 12, subtract 12 and make it pm
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  }

  // Otherwise it is morning (am)
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
