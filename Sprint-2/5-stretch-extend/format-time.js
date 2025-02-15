// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes= time.slice(3,5);
  
  if (hours === 0) {
    return  (`12:${minutes} am`);//midnight case
  }
  else if(hours<12){
    return (`${hours.toString().padStart(2, "0")}:${minutes} am`);//morning

  }else if(hours===12){
    return(`12:${minutes} pm`);//afternoon

  }else{
  return `${(hours-12).toString().padStart(2, "0")}:${minutes} pm`;//evening
  }

}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.log(`${currentOutput} (Expected: ${targetOutput})`);
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.log(`${currentOutput2} (Expected: ${targetOutput2})`);
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.log(`${currentOutput3} (Expected: ${targetOutput3})`);
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.log(`${currentOutput4} (Expected: ${targetOutput4})`);
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("15:30");
const targetOutput5 = "03:30 pm";
console.log(`${currentOutput5} (Expected: ${targetOutput5})`);
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("11:45");
const targetOutput6 = "11:45 am";
console.log(`${currentOutput6} (Expected: ${targetOutput6})`);
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);
