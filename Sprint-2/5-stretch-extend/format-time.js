// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); // captures the hours part of the time string, e.g. "08" from "08:00"
  const minutes = time.slice(2);  // captures the full minutes part e.g. ":30", not just ":00"
  if (hours === 0) {
    return `12${minutes} am`; // midnight edge case - 00:00 should be 12:00 am, not 0:00 am
  }
  if (hours === 12) {
    return `12${minutes} pm`; // noon edge case - 12:00 should be 12:00 pm, not 12:00 am
  }
  if (hours > 12) {
    return `${hours - 12}${minutes} pm`; // afternoon - subtract 12 to convert to 12-hour format
  }
  return `${time} am`; // morning hours 1-11, no change needed
}

// === means strict equality - checks that both the value AND the type match
// e.g. 1 === "1" is false (number vs string), but 1 === 1 is true
// console.assert checks if the condition is true - if not, it prints the error message

// Existing tests
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am"; // normal morning time - no change expected
console.assert(currentOutput === targetOutput, `current output: ${currentOutput}, target output: ${targetOutput}`);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm"; // normal afternoon time - 23 - 12 = 11
console.assert(currentOutput2 === targetOutput2, `current output: ${currentOutput2}, target output: ${targetOutput2}`);

// Additional tests for edge cases
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am"; // midnight - 00:00 hours should display as 12:00 am
console.assert(currentOutput3 === targetOutput3, `current output: ${currentOutput3}, target output: ${targetOutput3}`);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm"; // noon - sits on the boundary between am and pm
console.assert(currentOutput4 === targetOutput4, `current output: ${currentOutput4}, target output: ${targetOutput4}`);

const currentOutput5 = formatAs12HourClock("01:00");
const targetOutput5 = "01:00 am"; // earliest normal morning hour
console.assert(currentOutput5 === targetOutput5, `current output: ${currentOutput5}, target output: ${targetOutput5}`);

const currentOutput6 = formatAs12HourClock("13:30");
const targetOutput6 = "1:30 pm"; // tests that actual minutes (:30) are preserved, not hardcoded as :00
console.assert(currentOutput6 === targetOutput6, `current output: ${currentOutput6}, target output: ${targetOutput6}`);

console.log(formatAs12HourClock("08:00")); // "08:00 am"
console.log(formatAs12HourClock("23:00")); // "11:00 pm"
console.log(formatAs12HourClock("00:00")); // "12:00 am"
console.log(formatAs12HourClock("12:00")); // "12:00 pm"
console.log(formatAs12HourClock("13:30")); // "1:30 pm"