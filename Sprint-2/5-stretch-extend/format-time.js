// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);
  
  const period = hours >= 12 ? "pm" : "am";
  
  hours = hours % 12;
  if (hours === 0) {
    hours = 12;
  }
  
  const paddedHours = hours.toString().padStart(2, "0");
  
  return `${paddedHours}:${minutes} ${period}`;
}

console.assert(formatAs12HourClock("08:00") === "08:00 am", "Morning time failed");
console.assert(formatAs12HourClock("23:00") === "11:00 pm", "Night time failed");

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight edge case failed");
console.assert(formatAs12HourClock("00:15") === "12:15 am", "Past midnight failed");

console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Noon edge case failed");
console.assert(formatAs12HourClock("12:30") === "12:30 pm", "Past noon failed");

console.assert(formatAs12HourClock("13:45") === "01:45 pm", "Padding hour formatting failed");
