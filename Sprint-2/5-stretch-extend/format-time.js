// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
// --- > Debugging this code was not easy for me, I could solve this by the help of AI Explaining each step and conditions and finally we made it work well with different inputs, I mean string with number character.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(2);

  let formattedHours;

  if (hours === 0) {
    formattedHours = 12;
  } else if (hours > 12) {
    formattedHours = hours - 12;
  } else {
    formattedHours = hours;
  }

  // ---> Add leading zero if needed
  if (formattedHours < 10) {
    formattedHours = "0" + formattedHours;
  }

  if (hours >= 12) {
    return `${formattedHours}${minutes} pm`;
  } else {
    return `${formattedHours}${minutes} am`;
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
console.assert(formatAs12HourClock("00:00") === "12:00 am");
console.assert(formatAs12HourClock("12:00") === "12:00 pm");
console.assert(formatAs12HourClock("13:05") === "01:05 pm");
console.assert(formatAs12HourClock("01:05") === "01:05 am");
console.assert(formatAs12HourClock("23:59") === "11:59 pm");
