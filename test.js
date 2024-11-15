// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function convertAs24HoursTCo12hourslock(time) {
  const hours = Number(time.slice(0, 2));// hours remain
    // console.log(hours);
  const minutes = time.slice(3);
  // console.log(minutes);
  if (hours === 24) {
    if (minutes === '00') {
      return `12 AM`;
    }
    return `12:${minutes} AM`
  } else if (hours == 0o0) {
    if (minutes === '00') {
      return `12 AM`;
    }
    return `12:${minutes} AM`
  }
  else if (hours > 12) {
    if (minutes == '00') {
      return `${hours - 12} PM`;
    }
    return `${hours - 12}:${minutes} PM`;
  } else if (hours === 12) {
    if (minutes == '00') {
      return `12 PM`;
    }
    return `12:${minutes} PM`;
  } else if (hours < 12) {
    if (minutes == '00') {
      return `${hours.toString()} AM`;
    }
    return `${hours.toString()}:${minutes} AM`;
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
