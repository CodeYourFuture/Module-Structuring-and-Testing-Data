// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  let minutes = time.slice(3,5); // added this line of code to extract minutes 
  
  if(hours === 12){   // added this if statement to make sure 12:00 is handled properly.
    return `${time} pm`;
  }
  else if (hours > 12) {
    minutes = minutes.padStart(2, "0");  // added this line of code to make sure minutes is always in two digits
    return `${hours - 12}:${minutes} pm`;
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


const currentOutput3 = formatAs12HourClock("12:00");
const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);


const currentOutput4 = formatAs12HourClock("12:45");
const targetOutput4 = "12:45 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

