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

//=========> SOLUTIONS BELOW
function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = time.slice(3, 5);
  let period = hours >= 12 ? "pm" : "am";

  // Convert 24-hour format to 12-hour format
  if (hours === 0) {
    hours = 12; // Midnight case
  } else if (hours > 12) {
    hours -= 12;
  }

  return `${hours}:${minutes} ${period}`;
}

// Test Cases
const testCases = [
  { input: "00:00", expected: "12:00 am" }, // Midnight
  { input: "12:00", expected: "12:00 pm" }, // Noon
  { input: "08:00", expected: "8:00 am" },  // Standard AM case
  { input: "13:00", expected: "1:00 pm" },  // Standard PM case
  { input: "23:00", expected: "11:00 pm" }, // Late PM case
  { input: "01:00", expected: "1:00 am" },  // Early morning case
];

// Run tests
testCases.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(
    output === expected,
    `Test failed for input ${input}. Output: ${output}, Expected: ${expected}`
  );
});
