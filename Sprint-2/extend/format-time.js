// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

//updated code 

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));  // Get the hours as a number from the time string

  if (hours === 12) {
    return `${time} pm`;  // Special case for 12:00, it's always 12 PM
  }

  if (hours > 12) {
    return `${hours - 12}:00 pm`;  // Convert hours greater than 12 to PM and subtract 12
  }

  return `${time} am`;  // For hours 12 or less, return as AM
}

// Test cases
console.assert(formatAs12HourClock("08:00") === "08:00 am", `Test failed for 08:00`);
console.assert(formatAs12HourClock("23:00") === "11:00 pm", `Test failed for 23:00`);
console.assert(formatAs12HourClock("12:00") === "12:00 pm", `Test failed for 12:00`);
console.assert(formatAs12HourClock("00:00") === "00:00 am", `Test failed for 00:00`);


// Edge case tests

// Test for noon (12:00 PM)
console.assert(formatAs12HourClock("12:00") === "12:00 pm", `Test failed for 12:00 pm`);

// Test for midnight (00:00), should be 00:00 am
console.assert(formatAs12HourClock("00:00") === "00:00 am", `Test failed for 00:00 am`);

// Test for 1 AM and 1 PM
console.assert(formatAs12HourClock("01:00") === "01:00 am", `Test failed for 01:00 am`);

