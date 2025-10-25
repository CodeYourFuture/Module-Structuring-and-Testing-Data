// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // Expect time in "HH:MM" format
  const hours = Number(time.slice(0, 2));
  const mins = time.slice(3);

  if (hours === 0) {
    return `12:${mins} am`;
  }

  if (hours === 12) {
    return `12:${mins} pm`;
  }

  if (hours > 12) {
    const newHr = hours - 12;
    // pad single digits like 1:00 -> 01:00
    return `${String(newHr).padStart(2, "0")}:${mins} pm`;
  }

  return `${time} am`;
}

let currentOutput = formatAs12HourClock("08:00");
let targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

let currentOutput2 = formatAs12HourClock("23:00");
let targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
