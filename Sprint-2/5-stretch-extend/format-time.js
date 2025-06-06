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

// =========================================================

// FIXED FUNCTION
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));     // Get the hour part as number
  const minutes = time.slice(3);              // Get the minutes part as string

  if (hours === 0) {
    return `12:${minutes} am`;                // Special case for midnight
  } else if (hours === 12) {
    return `12:${minutes} pm`;                // Special case for noon
  } else if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;  // Convert to PM
  } else {
    return `${time} am`;                      // All other morning hours
  }
}

// =========================================================
// TEST CASES
// Use console.assert to check multiple inputs
// =========================================================

const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `Test 1 failed: ${currentOutput1} !== ${targetOutput1}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `Test 2 failed: ${currentOutput2} !== ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `Test 3 failed: ${currentOutput3} !== ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `Test 4 failed: ${currentOutput4} !== ${targetOutput4}`
);
=
