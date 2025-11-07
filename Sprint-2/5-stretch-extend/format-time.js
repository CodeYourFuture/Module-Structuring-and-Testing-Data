// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/**
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
*/

/** 
 * function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

Issues

Minutes are hard-coded in the if branch (:00 pm) instead of using the actual minutes from the input.

Edge case for 12 PM: 12:00 should be 12:00 pm, but currently it returns 12:00 am.

Edge case for 00:00 (midnight): 00:30 should be 12:30 am, but currently it returns 00:30 am.

Inputs with minutes other than 00 will fail: "14:45" becomes "2:00 pm" instead of "2:45 pm".

Fix the function:
*/

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  let period = "am";

  if (hours === 0) {
    hours = 12; // Midnight
  } else if (hours === 12) {
    period = "pm"; // Noon
  } else if (hours > 12) {
    hours -= 12;
    period = "pm";
  }

  return `${hours}:${minutes} ${period}`;
}

// Test Cases:

console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
  "Test 1 failed"
);

console.assert(
  formatAs12HourClock("00:30") === "12:30 am",
  "Test 2 failed"
);

console.assert(
  formatAs12HourClock("08:00") === "8:00 am",
  "Test 3 failed"
);

console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
  "Test 4 failed"
);

console.assert(
  formatAs12HourClock("12:45") === "12:45 pm",
  "Test 5 failed"
);

console.assert(
  formatAs12HourClock("14:30") === "2:30 pm",
  "Test 6 failed"
);

console.assert(
  formatAs12HourClock("23:59") === "11:59 pm",
  "Test 7 failed"
);

console.assert(
  formatAs12HourClock("11:15") === "11:15 am",
  "Test 8 failed"
);

console.log("All tests passed!");

/**
Explanation of Fixes:

Extract the minutes separately instead of hardcoding :00.

Handle midnight (00:xx) as 12:xx am.

Handle noon (12:xx) as 12:xx pm.

Convert hours > 12 to 12-hour format and set period to "pm".

Add tests for all edge cases: midnight, noon, times with non-zero minutes, morning and evening.

*/


