// This is the latest solution to the problem from the prep.
// https://programming.codeyourfuture.io/structuring-data/sprints/2/prep/
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  // check my time is valid first
  validateTimeInput(time);
  const hours = Number(time.slice(0, 2));
  // handle midnight
  if (hours === 0) return "12:00 am";
  // handle noon
  if (hours === 12) return "12:00 pm";
  // otherwise convert to 12-hour clock
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}

function validateTimeInput(time) {
  // 1. A time string should be exactly 5 characters like "14:30"
  if (time.length !== 5) {
    throw new Error("Time must be in format HH:MM");
  }

  // 2. Parse hours and minutes - this uses destructuring
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const [hours, minutes] = time.split(":").map(Number);

  // 3. Check if we got valid numbers within range
  if (
    hours === undefined ||
    minutes === undefined ||
    hours > 23 ||
    minutes > 59
  ) {
    throw new Error("Invalid time - use hours 00-23 and minutes 00-59");
  }
}

// Test Group 1: Invalid Inputs
// 🚫 Testing hours that don't exist in 24-hour time
try {
  const impossibleTime = formatAs12HourClock("27:00");
  console.assert(
    false,
    `Function accepted invalid hour 27! Output: ${impossibleTime}`
  );
} catch (error) {
  console.log("✅ Function correctly rejected hour 27");
}

// 🚫 Testing minutes > 59
try {
  const invalidMinutes = formatAs12HourClock("14:75");
  console.assert(
    false,
    `Function accepted invalid minutes 75! Output: ${invalidMinutes}`
  );
} catch (error) {
  console.log("✅ Function correctly rejected minutes 75");
}

// 🚫 Testing completely wrong format
try {
  const wrongFormat = formatAs12HourClock("1pm");
  console.assert(
    false,
    `Function accepted wrong format! Output: ${wrongFormat}`
  );
} catch (error) {
  console.log("✅ Function correctly rejected wrong format");
}

// Test Group 2: Valid Inputs, Boundary Conditions
try {
  const midnight = formatAs12HourClock("00:00");
  console.assert(
    midnight === "12:00 am",
    `❌ Expected "12:00 am", but got "${midnight}"`
  );
} catch (error) {
  console.error(error);
}

try {
  const noon = formatAs12HourClock("12:00");
  console.assert(
    noon === "12:00 pm",
    `❌ Expected "12:00 pm", but got "${noon}"`
  );
} catch (error) {
  console.error(error);
}
