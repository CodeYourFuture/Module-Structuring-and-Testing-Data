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
// FIXED FUNCTION
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));     // Get the hour part (e.g., "08" -> 8)
  const minutes = time.slice(3);              // Get the minutes part (e.g., "00")

  // Handle midnight (00:XX)
  if (hours === 0) {
    return `12:${minutes} am`;                // 00:00 becomes 12:00 am
  }
  // Handle noon (12:XX)
  else if (hours === 12) {
    return `12:${minutes} pm`;                // 12:00 stays 12:00, but becomes pm
  }
  // Handle PM hours (13:XX to 23:XX)
  else if (hours > 12) {
    // Subtract 12 for PM hours (e.g., 13 becomes 1, 23 becomes 11)
    // Use String() and padStart(2, "0") to ensure single-digit hours like 1 become "01"
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`;
  }
  // Handle all other AM hours (01:XX to 11:XX)
  else {
    return `${time} am`;                      // e.g., 08:00 remains 08:00 am
  }
}

// TEST CASES
// Use console.assert to check multiple inputs

// Test 1: Standard AM time
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `Test 1 failed: current output: ${currentOutput1}, target output: ${targetOutput1}`
);

// Test 2: Standard PM time
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `Test 2 failed: current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// Test 3: Midnight edge case
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `Test 3 failed: current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Test 4: Noon edge case
const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `Test 4 failed: current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// Additional Test: PM time with minutes and single-digit hour after conversion (e.g., 13:30 -> 01:30 pm)
const currentOutput5 = formatAs12HourClock("13:30");
const targetOutput5 = "01:30 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `Test 5 failed: current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Additional Test: AM time with minutes
const currentOutput6 = formatAs12HourClock("07:45");
const targetOutput6 = "07:45 am";
console.assert(
  currentOutput6 === targetOutput6,
  `Test 6 failed: current output: ${currentOutput6}, target output: ${targetOutput6}`
);

// Additional Test: Just after midnight
const currentOutput7 = formatAs12HourClock("00:01");
const targetOutput7 = "12:01 am";
console.assert(
  currentOutput7 === targetOutput7,
  `Test 7 failed: current output: ${currentOutput7}, target output: ${targetOutput7}`
);

// Additional Test: Just before midnight (last minute of the day)
const currentOutput8 = formatAs12HourClock("23:59");
const targetOutput8 = "11:59 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `Test 8 failed: current output: ${currentOutput8}, target output: ${targetOutput8}`
);

console.log("All console.assert tests passed if no error messages are displayed above!");