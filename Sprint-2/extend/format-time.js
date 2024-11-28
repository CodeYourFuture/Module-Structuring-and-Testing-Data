// This is the latest solution to the problem from the prep.
// https://programming.codeyourfuture.io/structuring-data/sprints/2/prep/
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // check my time is valid first
  if (validateTimeInput(time)) {
    const hours = Number(time.slice(0, 2));
    const minutes = time.slice(-2);

    // handle midnight and noon
    if (hours === 0) {
      return `12:${minutes} am`;
    }
    if (hours === 12) {
      return `${hours}:${minutes} pm`;
    }

    // otherwise convert to 12-hour clock
    if (hours > 12) {
      return `${hours - 12}:${minutes} pm`;
    }
    return `${time} am`;
  }
  return false;
}

function validateTimeInput(time) {
  // 1. A time string should be exactly 5 characters like "14:30"
  if (time.length !== 5) {
    return false;
  }

  // 2. Parse hours and minutes
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(-2));

  // 3. Check if we got valid numbers within range
  if (
    hours === undefined ||
    minutes === undefined ||
    hours < 0 ||
    minutes < 0 ||
    hours > 23 ||
    minutes > 59
  ) {
    return false;
  }
  return true;
}

// Here's a short function to make my tests easier to read
// Stretch: is there another place in my code where I am repeating the same lines?
function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

// Test Group 1: Invalid Inputs

// 🚫 Testing hours that don't exist in 24-hour time
const impossibleTime = formatAs12HourClock("27:00");
assertEquals(impossibleTime, false);

// 🚫 Testing minutes > 59
const invalidMinutes = formatAs12HourClock("14:75");
assertEquals(invalidMinutes, false);

// 🚫 Testing completely wrong format
const wrongFormat = formatAs12HourClock("1pm");
assertEquals(wrongFormat, false);

// Test Group 2: Valid Inputs, Boundary Conditions
const arbitraryValidTime = formatAs12HourClock("13:22");
assertEquals(arbitraryValidTime, "1:22 pm");

const midnight = formatAs12HourClock("00:00");
assertEquals(midnight, "12:00 am");

const noon = formatAs12HourClock("12:00");
assertEquals(noon, "12:00 pm");

const midnightMinutes = formatAs12HourClock("00:17");
assertEquals(midnightMinutes, "12:17 am");
