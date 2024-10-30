// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours == 24) {
    return `00:00am`;
  }
  if (hours == 12) {
    return `12:${time.substring(3, 5)}pm`;
  }
  if (hours > 12) {
    return `${hours - 12}:${time.substring(3, 5)}pm`;
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("24:00");
console.log(currentOutput);
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

//const currentOutput2 = formatAs12HourClock("23:10");
//console.log(currentOutput2);
//const targetOutput2 = "11:00 pm";
//console.assert(
//currentOutput2 === targetOutput2,
//`current output: ${currentOutput2}, target output: ${targetOutput2}`
//);

//I tried it with time of 24:00 and it returned 12:00pm instead of returning 00:00am, so I inserted line 6,7,8 to fix it
//In line 10, I changed it to show the minutes as well
//Lines23-29 seemed to be useless, so I omitted them by putting //
//I tried it with the time of 12:00 and it returned 12:00am instead of 12:00pm, so I put lines 9-11 to resolve the issue
