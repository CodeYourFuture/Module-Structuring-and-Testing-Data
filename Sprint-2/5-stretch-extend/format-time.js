// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  if (hours === 0) {
    return `12:00 am`;  // Midnight edge case
  } else if (hours === 12) {
    return `${time} pm`; // Noon edge case
  } else if (hours > 12) {
    return `${String(hours - 12).padStart(2, '0')}:00 pm`;  // Convert hours to 12-hour format
  }
  return `${time} am`;  // For times between 1 AM and 11 AM
}

const testCases = [
  {input: "08:00", expected: "08:00 am"},
  {input: "23:00", expected: "11:00 pm"},
  {input: "00:00", expected: "12:00 am"},  // Midnight case
  {input: "12:00", expected: "12:00 pm"},  // Noon case
  {input: "01:00", expected: "01:00 am"},  // Morning case
  {input: "13:00", expected: "01:00 pm"},  // Afternoon case
];

testCases.forEach(({ input, expected }) => {
  const currentOutput = formatAs12HourClock(input);
  console.assert(
    currentOutput === expected,
    `For input "${input}", expected "${expected}", but got "${currentOutput}"`
  );
});
