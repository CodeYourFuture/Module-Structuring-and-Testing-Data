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

const testCases = [
  { currentOutput: "00:00", targetOutput: "12:00 am" },
  { currentOutput: "01:15", targetOutput: "01:15 am" },
  { currentOutput: "08:00", targetOutput: "08:00 am" },
  { currentOutput: "12:00", targetOutput: "12:00 pm" },
  { currentOutput: "15:30", targetOutput: "03:30 pm" },
  { currentOutput: "23:00", targetOutput: "11:00 pm" },
  { currentOutput: "23:59", targetOutput: "11:59 pm" },
];

testCases.forEach(({ currentOutput, targetOutput }, index) => {
  const output = formatAs12HourClock(currentOutput);
  console.assert(
    output === targetOutput,
    `Test ${
      index + 1
    } failed: current output: ${currentOutput}, output: ${output}, targetOutput: ${targetOutput}`
  );
});
