// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  if (!/^\d{2}:\d{2}$/.test(time)) { //If input does not match HH:MM format, returns string "Invalid time format"
  return "Invalid time format";
}

  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

 if (hours === 0) return `12:${minutes} am`;
  if (hours === 12) return `12:${minutes} pm`;
    if (hours === 24) return `12:${minutes} am`;
   if (hours > 12) return `${hours - 12}:${minutes} pm`;

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

console.log(formatAs12HourClock("12:00")); // 
console.log(formatAs12HourClock("00:00")); //
console.log(formatAs12HourClock("15:30")); //
console.log(formatAs12HourClock("11:45")); //
console.log(formatAs12HourClock("24:00")); //
console.log(formatAs12HourClock("ab:cd")); //
