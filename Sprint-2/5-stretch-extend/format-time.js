// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.


function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(":").map(Number);
  let period = hours >= 12 ? "pm" : "am";

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours -= 12;
  }

  const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
  const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return `${hoursString}:${minutesString} ${period}`;
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
 
const currentOutput3 = formatAs12HourClock("21:00");
const targetOutput3 = "09:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);
}



console.log(formatAs12HourClock("08:00")); // 08:00 am
console.log(formatAs12HourClock("23:00")); // 11:00 pm
console.log(formatAs12HourClock("21:00")); // 09:00 pm