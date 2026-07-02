// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  
  if (hours > 12) {
    const convertedHours = hours - 12;
    // Pad the hour with a leading zero if it's a single digit (e.g., 3 becomes "03")
    const paddedHours = String(convertedHours).padStart(2, "0");
    return `${paddedHours}:${minutes} pm`;
  }
  
  return `${time} am`;
}

// === Your Tests (All will now pass silently!) ===

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
 
console.assert(formatAs12HourClock("15:00") === "03:00 pm", `Failed Case D: 03:00 pm`);
console.assert(formatAs12HourClock("13:00") === "01:00 pm", `Failed Case E: 01:00 pm`);
console.assert(formatAs12HourClock("15:45") === "03:45 pm", `Failed Case D: 03:45 pm`);
console.assert(formatAs12HourClock("13:45") === "01:45 pm", `Failed Case E: 01:45 pm`);
console.assert(formatAs12HourClock("08:45") === "08:45 am", `Failed Case F: 08:45 am`);

console.log("All current assertions completed!");