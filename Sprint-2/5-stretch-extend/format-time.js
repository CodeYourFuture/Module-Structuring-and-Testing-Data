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



// My code:


function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3); // Get minutes part
  
  if (hours === 0) {
    return `12:${minutes} am`;
  } else if (hours === 12) {
    return `12:${minutes} pm`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else {
    return `${time} am`;
  }
}

// Test cases
console.log("Testing formatAs12HourClock function:");

// Test 1: Morning time (already working)
const currentOutput1 = formatAs12HourClock("08:00");
const targetOutput1 = "08:00 am";
console.assert(
  currentOutput1 === targetOutput1,
  `Test 1 failed: current output: ${currentOutput1}, target output: ${targetOutput1}`
);

// Test 2: Evening time (already working)
const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `Test 2 failed: current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// Test 3: Noon (12:00) - BUG FOUND
const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `Test 3 failed: current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// Test 4: Midnight (00:00) - BUG FOUND
const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "12:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `Test 4 failed: current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// Test 5: 1 PM (13:00)
const currentOutput5 = formatAs12HourClock("13:00");
const targetOutput5 = "1:00 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `Test 5 failed: current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// Test 6: With actual minutes
const currentOutput6 = formatAs12HourClock("14:30");
const targetOutput6 = "2:30 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `Test 6 failed: current output: ${currentOutput6}, target output: ${targetOutput6}`
);

// Test 7: 11 PM
const currentOutput7 = formatAs12HourClock("23:45");
const targetOutput7 = "11:45 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `Test 7 failed: current output: ${currentOutput7}, target output: ${targetOutput7}`
);

console.log("All tests completed!");