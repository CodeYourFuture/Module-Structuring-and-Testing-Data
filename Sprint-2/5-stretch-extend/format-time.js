// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`; //This hardcodes :00, losing the original minutes from the time input. 
    //Even original minutes aren't 00 it will always return :00
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

// new fixed code
function formatAs12HourClock(time) {
  const [hourStr, minute] = time.split(":");
  const hours = Number(hourStr);

  const isPM = hours >= 12;
  const displayHour = hours % 12 === 0 ? 12 : hours % 12;
  const suffix = isPM ? "pm" : "am";

  return `${String(displayHour).padStart(2, "0")}:${minute} ${suffix}`;
}
console.assert(
  formatAs12HourClock("23:00") === "11:00 pm",
);
console.assert(
  formatAs12HourClock("00:00") === "12:00 am",
);
console.assert(
  formatAs12HourClock("12:00") === "12:00 pm",
);