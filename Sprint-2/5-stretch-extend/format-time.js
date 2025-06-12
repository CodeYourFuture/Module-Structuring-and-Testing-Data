// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours === 0) {
    return "12 am"; // midnight
  } else if (hours === 12) {
    return "12 pm"; // noon
  } else if (hours > 12) {
    return `${hours - 12} pm`;
  } else {
    return `${hours} am`;
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

console.assert(formatAs12HourClock("00:00") === "12 am", "Midnight failed");
console.assert(formatAs12HourClock("01:00") === "1 am", "1am failed");
console.assert(formatAs12HourClock("08:00") === "8 am", "8am failed");
console.assert(formatAs12HourClock("12:00") === "12 pm", "Noon failed");
console.assert(formatAs12HourClock("13:00") === "1 pm", "1pm failed");
console.assert(formatAs12HourClock("23:00") === "11 pm", "11pm failed");