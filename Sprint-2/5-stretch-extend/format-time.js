// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  if (hours >= 12) {
    const pmHours = String(hours === 12 ? 12 : hours - 12).padStart(2, "0");
    return `${pmHours}:${minutes} pm`;
  }
  const amHours = String(hours === 0 ? 12 : hours).padStart(2, "0");
  return `${amHours}:${minutes} am`;
}

function runTest(description, input, expected) {
  const result = formatAs12HourClock(input);
  console.assert(
    result === expected,
    `Test failed for ${description}: expected ${expected}, got ${result}`
  );
  if (result === expected) {
    console.log(`Test passed for ${description}`);
  }
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

//== Additional Test Cases =//

// Test case for standard AM time
runTest("Standard early morning", "08:00", "08:00 am");
runTest("standard late morning", "11:30", "11:30 am");

// Test case for standard PM time
runTest("Standard afternoon", "13:15", "01:15 pm");
runTest("Standard evening", "20:45", "08:45 pm");

// Test case for 12-hour threshold2
runTest("Exact Noon (12:00)", "12:00", "12:00 pm");
runTest("Exact Midnight", "00:00", "12:00 am");
