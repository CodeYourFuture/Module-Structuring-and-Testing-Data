// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  let suffix = 'am';
  if (hours === 0) {
    hours = 12; // midnight
  } else if (hours === 12) {
    suffix = 'pm'; // noon
  } else if (hours > 12) {
    hours -= 12;
    suffix = 'pm';
  }

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  return `${formattedHours}:${minutes} ${suffix}`;
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

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Test Midnight");
console.assert(formatAs12HourClock("01:00") === "01:00 am", "Test 1 AM");
console.assert(formatAs12HourClock("11:00") === "11:00 am", "Test 11 AM");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Test Noon");
console.assert(formatAs12HourClock("13:00") === "01:00 pm", "Test 1 PM");
console.assert(formatAs12HourClock("23:59") === "11:59 pm", "Test 11:59 PM");