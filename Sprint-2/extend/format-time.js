// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2)); // Gets the hour as a number 
  const minutes = time.slice(3) // Gets the minutes 

  if(hours === 0){                //Checks for midnight hour (00:00)
    return `12:${minutes} am`;
  }

  if(hours === 12){
    return `${time} pm`       // Checks for (12:00 pm)
  }

  if (hours > 12) {
    return `${String(hours - 12).padStart(2, "0")}:${minutes} pm`; // Turns hours to two characters '01'
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("22:00");
const targetOutput2 = "10:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);


const currentOutput4 = formatAs12HourClock("14:00");
const targetOutput4 = "02:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("12:01");
const targetOutput5 = "12:01 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);


let myTime = formatAs12HourClock("12:25");
console.log(myTime);