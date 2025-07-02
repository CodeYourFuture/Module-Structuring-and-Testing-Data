// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.
function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");

  const hours = Number(hourStr);
  const minutes = Number(minuteStr);

  // Validate input

  if (
    isNaN(hours) || isNaN(minutes) ||
    hourStr.length !== 2 || minuteStr.length !== 2 ||
    hours < 0 || hours > 23 ||
    minutes < 0 || minutes > 59
  ) {
    return "Invalid time";
  }

  let displayHours = hours % 12 || 12;
  const period = hours >= 12 ? "pm" : "am";

  return `${displayHours}:${minuteStr} ${period}`;
}

// TEST CASES
console.assert(formatAs12HourClock("00:00") === "12:00 am", 
"Failed: 00:00");
console.assert(formatAs12HourClock("08:00") === "8:00 am", 
"Failed: 08:00");
console.assert(formatAs12HourClock("12:00") === "12:00 pm", 
"Failed: 12:00");
console.assert(formatAs12HourClock("13:45") === "1:45 pm", 
"Failed: 13:45");
console.assert(formatAs12HourClock("23:59") === "11:59 pm", 
"Failed: 23:59");
console.assert(formatAs12HourClock("03:22") === "3:22 am", 
"Failed: 03:22");
console.assert(formatAs12HourClock("25:00") === "Invalid time", 
"Failed: 25:00 should be invalid");
console.assert(formatAs12HourClock("12:61") === "Invalid time", 
"Failed: 12:61 should be invalid");
console.assert(formatAs12HourClock("ab:cd") === "Invalid time", 
"Failed: ab:cd should be invalid");
