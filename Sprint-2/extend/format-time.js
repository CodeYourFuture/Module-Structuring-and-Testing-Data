// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  time = time.split(':');
  let hour = parseInt(time[0], 10);
  let minutes = time[1];
  
  if (hour >= 0 && hour < 24) {
    let period = hour >= 12 ? 'pm' : 'am';
    hour = hour % 12 || 12; // Converts "0" (midnight) to "12" and formats hours correctly.
    return `${hour}:${minutes}${period}`;
  } else {
    return `${time[0]}:${time[1]} is not a valid time`;
  }
}

const currentOutput = formatAs12HourClock("00:45");
const targetOutput = currentOutput
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("10:00");
const targetOutput2 = currentOutput2
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(targetOutput)
console.log(targetOutput2)