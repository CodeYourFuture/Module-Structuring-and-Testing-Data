// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");
  const hours = Number(hourStr);

  let period = hours >= 12 ? "pm" : "am";
  let displayHour = hours % 12;
  if (displayHour === 0) {
    displayHour = 12; // Handles 00:xx (midnight) and 12:xx (noon) 
  }
  // If you input "08:00" is allowed to pass
  const paddedHour = hourStr.length === 2 && displayHour < 10 ? `0${displayHour}` : `${displayHour}`;

  return `${paddedHour}:${minuteStr} ${period}`;
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

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight failed");
console.assert(formatAs12HourClock("01:00") === "01:00 am", "1am failed");
console.assert(formatAs12HourClock("08:00") === "08:00 am", "8am failed");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Noon failed");
console.assert(formatAs12HourClock("13:00") === "01:00 pm", "1pm failed");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "11pm failed");