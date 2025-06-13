// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
// The function should take a time in 24-hour format (HH:MM) and return it in 12-hour format with am/pm.
// For example, "08:00" should return "08:00 am" and "23:00" should return "11:00 pm".
"use strict";
/**
 * Converts a time string from 24-hour format (HH:MM) to 12-hour format with am/pm.
 * @param {string} time - The time in 24-hour format (e.g., "08:00", "23:00").
 * @returns {string} The time in 12-hour format with am/pm.
 */

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

// Additional test cases
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "00:00 am"; // Midnight should be 12:00 am
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
