// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = Number(time.slice(3, 5)).toString().padStart(2, "0");
  if (hours === 0 || hours === 24) {
    return `12:${minutes} am`;
  } else if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${minutes} pm`;
  } else if (hours < 12) {
    return `${hours.toString().padStart(2, "0")}:${minutes} am`;
  } else {
    return `${hours.toString().padStart(2, "0")}:${minutes} pm`;
  }
}

//
const testInputOutputPairs = [
  { input: "08:00", expectedOutput: "08:00 am" },
  { input: "23:00", expectedOutput: "11:00 pm" },
  { input: "12:00", expectedOutput: "12:00 pm" },
  { input: "13:00", expectedOutput: "01:00 pm" },
  { input: "00:00", expectedOutput: "12:00 am" },
  { input: "24:00", expectedOutput: "12:00 am" },
  { input: "01:17", expectedOutput: "01:17 am" },
  { input: "21:20", expectedOutput: "09:20 pm" },
];

for (const { input, expectedOutput } of testInputOutputPairs) {
  const currentOutput = formatAs12HourClock(input);
  const targetOutput = expectedOutput;
  console.assert(
    currentOutput === targetOutput,
    `current output: ${currentOutput}, target output: ${targetOutput}`
  );
}
