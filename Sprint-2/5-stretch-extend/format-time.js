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

///Fixed code:
function formatAs12HourClock(time) {
  const hours24 = Number(time.slice(0, 2));
  const minutes = time.slice(3);
  let period = "am";
  let hours12 = hours24;

  if (hours24 === 0) {
    hours12 = 12; // midnight
  } else if (hours24 === 12) {
    period = "pm"; // noon
  } else if (hours24 > 12) {
    hours12 = hours24 - 12;
    period = "pm";
  }

  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
}

//Tests with edge cases:
console.assert(formatAs12HourClock("00:00") === "12:00 am", "Test failed: 00:00");
console.assert(formatAs12HourClock("01:00") === "01:00 am", "Test failed: 01:00");
console.assert(formatAs12HourClock("08:00") === "08:00 am", "Test failed: 08:00");
console.assert(formatAs12HourClock("11:00") === "11:00 am", "Test failed: 11:00");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Test failed: 12:00");
console.assert(formatAs12HourClock("13:00") === "01:00 pm", "Test failed: 13:00");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Test failed: 23:00");