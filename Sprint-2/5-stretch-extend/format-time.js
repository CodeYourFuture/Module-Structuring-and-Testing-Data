// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.



function formatAs12HourClock(time) {

if (!/^\d{2}:\d{2}$/.test(time)) {
    return "Invalid time format";
  } 

const hours = Number(time.slice(0, 2));
const minutes = Number(time.slice(3, 5));
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
    return "Invalid time range";
  }
  let period = "am";
  let displayHours = hours;

  if (hours === 0) {
    displayHours = 12; // midnight
  } else if (hours === 12) {
    period = "pm"; // noon
  } else if (hours > 12) {
    displayHours = hours - 12;
    period = "pm";
  }
  const formattedHours = String(displayHours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  return `${formattedHours}:${formattedMinutes} ${period}`;
}
console.log(formatAs12HourClock("00:00"));

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", "Noon");
console.assert(formatAs12HourClock("08:30") === "08:30 am", "Morning");
console.assert(formatAs12HourClock("15:45") === "03:45 pm", "Afternoon");
console.assert(formatAs12HourClock("23:59") === "11:59 pm", "Late night");
console.assert(formatAs12HourClock("24:00") === "Invalid time range", "Hour too high");
console.assert(formatAs12HourClock("12:60") === "Invalid time range", "Minute too high");
console.assert(formatAs12HourClock("8:7") === "Invalid time format", "Wrong format");
console.assert(formatAs12HourClock("hello") === "Invalid time format", "Not a time");