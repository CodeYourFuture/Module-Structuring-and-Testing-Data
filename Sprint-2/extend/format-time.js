// This is the latest solution to the problem from the prep.
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
______________________________SOLUTION___________________________________________________
/*
Code Review and Initial Observations:
Function Purpose: The function formatAs12HourClock takes a time string in HH:MM format and converts it to a 12-hour clock format with an am/pm suffix.

Identified Issues:

Incorrect Handling of "am" Times:
The function assumes any time not greater than 12 is "am," which is incorrect for "12:00" (should be 12:00 pm).
Times from "01:00" to "11:59" are handled correctly.
Missing Handling for Midnight ("00:00"):
"00:00" should be converted to 12:00 am, but the function does not account for this edge case.
Incorrect Return for "pm" Times:
The function appends :00 pm, which assumes all times have zero minutes, ignoring the MM portion of the input string.
*/

// Fixing the Function:

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3); // Extract the minutes
  if (hours === 0) {
    return `12:${minutes} am`; // Handle midnight
  }
  if (hours === 12) {
    return `12:${minutes} pm`; // Handle noon
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`; // Convert to 12-hour "pm"
  }
  return `${time} am`; // Handle all "am" times
}

//   WRITING COMPREHENSIVE TESTS
/*
Basic am Cases:

"01:00" → "01:00 am"
"08:30" → "08:30 am"
Basic pm Cases:

"13:45" → "1:45 pm"
"23:59" → "11:59 pm"
Midnight and Noon Edge Cases:

"00:00" → "12:00 am" (Midnight)
"12:00" → "12:00 pm" (Noon)
Invalid Inputs:

"25:00" → Should raise an error or return "Invalid time"
"12:60" → Should raise an error or return "Invalid time"
"abcd" → Should raise an error or return "Invalid time"
*/

//  Test Code Implementation:

function runTests() {
  const testCases = [
    // Basic "am" cases
    { input: "01:00", expected: "01:00 am" },
    { input: "08:30", expected: "08:30 am" },

    // Basic "pm" cases
    { input: "13:45", expected: "1:45 pm" },
    { input: "23:59", expected: "11:59 pm" },

    // Midnight and noon edge cases
    { input: "00:00", expected: "12:00 am" },
    { input: "12:00", expected: "12:00 pm" },

    // Invalid inputs
    { input: "25:00", expected: "Invalid time" },
    { input: "12:60", expected: "Invalid time" },
    { input: "abcd", expected: "Invalid time" },
  ];

  let passCount = 0;
  testCases.forEach(({ input, expected }) => {
    try {
      const output = formatAs12HourClock(input);
      console.assert(output === expected, `Test failed for input "${input}". Expected: "${expected}", but got: "${output}"`);
      if (output === expected) passCount++;
    } catch (error) {
      console.assert(expected === "Invalid time", `Test failed for input "${input}". Expected: "Invalid time", but threw an error: ${error.message}`);
      if (expected === "Invalid time") passCount++;
    }
  });

  console.log(`${passCount}/${testCases.length} tests passed.`);
}

// Updated function with error handling for invalid inputs
function formatAs12HourClock(time) {
  const timeRegex = /^([01]?\d|2[0-3]):([0-5]\d)$/; // Matches valid HH:MM format
  if (!timeRegex.test(time)) {
    return "Invalid time";
  }

  const [hoursStr, minutes] = time.split(":");
  const hours = Number(hoursStr);

  if (hours === 0) {
    return `12:${minutes} am`; // Handle midnight
  }
  if (hours === 12) {
    return `12:${minutes} pm`; // Handle noon
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`; // Convert to 12-hour "pm"
  }
  return `${hours}:${minutes} am`; // Handle all "am" times
}

// Run tests
runTests();
