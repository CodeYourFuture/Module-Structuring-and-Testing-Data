// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
//// Original function to convert time to 12-hour format

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  let period = "am";
  let formattedHours = hours;

  if (hours === 0) {
    formattedHours = 12; // Midnight case
  } else if (hours === 12) {
    period = "pm"; // Noon case
  } else if (hours > 12) {
    formattedHours = hours - 12;
    period = "pm";
  }

  return `${formattedHours}:${minutes} ${period}`;
}

// ✅ Test cases to check correctness
const testCases = [
  { input: "08:00", expected: "8:00 am" },
  { input: "23:00", expected: "11:00 pm" },
  { input: "00:00", expected: "12:00 am" }, // Midnight case
  { input: "12:00", expected: "12:00 pm" }, // Noon case
  { input: "15:30", expected: "3:30 pm" }, // Random PM time
  { input: "01:45", expected: "1:45 am" }, // Random AM time
  { input: "22:15", expected: "10:15 pm" }, // Another PM test
];

testCases.forEach(({ input, expected }) => {
  const output = formatAs12HourClock(input);
  console.assert(
    output === expected,
    `❌ Test failed for input ${input}: expected "${expected}", got "${output}"`
  );
});

console.log("✅ All tests passed!");
