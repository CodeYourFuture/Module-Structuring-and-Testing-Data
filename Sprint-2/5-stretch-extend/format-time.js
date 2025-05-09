// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

/*function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}*/

//fixed code.

function formatAs12HourClock(time) {
  const [hours, minutes] = time.split(":").map(Number);
  const formattedMinutes = minutes.toString().padStart(2, "0");

  let displayHours = hours % 12;
  if (displayHours === 0) displayHours = 12;
  displayHours = displayHours.toString().padStart(2, 0);

  const period = hours < 12 ? "am" : "pm";

  return `${displayHours}:${formattedMinutes} ${period}`;
}
console.log(formatAs12HourClock("14:00"));
console.log(formatAs12HourClock("12:30"));
console.log(formatAs12HourClock("1:17"));
console.log(formatAs12HourClock("22:55"));
console.log(formatAs12HourClock("3:31"));

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

const currentOutput3 = formatAs12HourClock("14:00");
const targetOutput3 = "02:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
  //Assertion failed: current output: 2:00 pm, target output: 02:00 pm. The code does not handle leading zeros correctly.
);

const currentOutput4 = formatAs12HourClock("12:30");
const targetOutput4 = "12:30 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
//Assertion failed: current output: 12:30 am, target output: 12:30 pm.
//the code subtracts 12 from the PM but it does not format them correctly

const currentOutput5 = formatAs12HourClock("15:33");
const targetOutput5 = "03:33 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);
//Assertion failed: current output: 3:00 pm, target output: 03:33 pm
// The code is not handling the leading zero correctly and doesn't handle minutes correctly for values over 30.

const currentOutput6 = formatAs12HourClock("1:17");
const targetOutput6 = "01:17 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);
//Assertion failed: current output: 1:17 am, target output: 01:17 am.

const currentOutput7 = formatAs12HourClock("23:47");
const targetOutput7 = "11:47 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);
//Assertion failed: current output: 11:00 pm, target output: 11:47 pm
//Doesn't handle correctly minutes over 30 for the pm. Seems like the minutes are handles correctly for the am.

const currentOutput8 = formatAs12HourClock("22:55");
const targetOutput8 = "10:55 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);
//Assertion failed: current output: 10:00 pm, target output: 10:55 pm

const currentOutput9 = formatAs12HourClock("00:47");
const targetOutput9 = "12:47 am";
console.assert(
  currentOutput9 === targetOutput9,
  `current output: ${currentOutput9}, target output: ${targetOutput9}`
);
//Assertion failed: current output: 00:47 am, target output: 12:47 am.
// code is not formatting the hours correctly.

const currentOutput10 = formatAs12HourClock("3:31");
const targetOutput10 = "03:31 am";
console.assert(
  currentOutput10 === targetOutput10,
  `current output: ${currentOutput10}, target output: ${targetOutput10}`
);
//Assertion failed: current output: 3:31 am, target output: 03:31 am.
