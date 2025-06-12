// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const [hourStr, minuteStr] = time.split(":");
  let hours = Number(hourStr);
  const period = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const paddedHour = hours.toString().padStart(2, "0");

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

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `Test failed :00:00 current output: ${currentOutput3}, target output: ${targetOutput3}`
);
const currentOutput4 = formatAs12HourClock("24:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
 
const currentOutput5 = formatAs12HourClock("12:00");
const targetOutput5 = "12:00 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `Test failed :12:00 current output: ${currentOutput5}, target output: ${targetOutput5}`
);
const currentOutput6 = formatAs12HourClock("13:50");
const targetOutput6 = "01:50 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `Test failed :13:50 current output: ${currentOutput6}, target output: ${targetOutput6}`
);
 

