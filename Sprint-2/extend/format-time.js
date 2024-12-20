// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));   // extract hours
  const minutes = (time.slice(3,5));        // extract minutes

  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || isNaN(hours) || isNaN(minutes)) {
    return null;      // check invalid input and return null
  }
  
  // For (00:00 am)
    if (hours === 0) {
    return `12:${minutes} am`;
  }

  // For (12:00 pm)
  if (hours === 12) {
    return `12:${minutes} pm`;
  }
  
  // For afternoon pm
  if (hours > 12) {
    return `${String(hours - 12).padStart(2, '0')}:${minutes} pm`;
  }

  // For morning am
  else{
  return `${time} am`;
}
  }


const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:01");
const targetOutput2 = "11:01 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output2: ${currentOutput2}, target output2: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output:3 ${currentOutput3}, target output3: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("18:10");
const targetOutput4 = "06:10 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output4: ${currentOutput4}, target output4: ${targetOutput4}`
);

// For invalid
const currentOutput5 = formatAs12HourClock("24:00");
const targetOutput5 = null;
console.assert(
  currentOutput5 === targetOutput5,
  `current output5: ${currentOutput5}, target output5: ${targetOutput5}`
);

// For (12:03 am)
const currentOutput6 = formatAs12HourClock("00:03");
const targetOutput6 = "12:03 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output6: ${currentOutput6}, target output6: ${targetOutput6}`
);

// For (12:26 pm)
const currentOutput7 = formatAs12HourClock("12:06");
const targetOutput7 = "12:06 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output7: ${currentOutput7}, target output7: ${targetOutput7}`
);

console.log(formatAs12HourClock("19:00"));
console.log(formatAs12HourClock("18:00"));