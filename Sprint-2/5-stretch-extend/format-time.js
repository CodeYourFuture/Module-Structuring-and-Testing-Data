// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


function formatAs12HourClock(time) {
  const [hh, mm] = time.split(":");
  let hours = Number(hh);
  const minutes = mm;
  let suffix = "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours === 12) {
    suffix = "pm";
  } else if (hours > 12) {
    hours -= 12;
    suffix = "pm";
  }

  const paddedHours = hours.toString().padStart(2, "0");
  return `${paddedHours}:${minutes} ${suffix}`;
}

console.assert(formatAs12HourClock("00:00") === "12:00 am", "Midnight");
console.assert(formatAs12HourClock("01:30") === "01:30 am", "1:30 AM");
console.assert(formatAs12HourClock("13:15") === "01:15 pm", "1:15 PM");
console.assert(formatAs12HourClock("23:59") === "11:59 pm", "11:59 PM");
console.assert(formatAs12HourClock("09:05") === "09:05 am", "9:05 AM");
