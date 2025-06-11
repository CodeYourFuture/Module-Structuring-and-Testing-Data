// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  if (!time.includes(':')){
    time = time.slice(0,-2)+':' + time.slice(-2)
  }
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    const minutes = time.slice(3);
      return `${hours - 12}:${minutes} pm`;
  }else if (time.length < 5){ 
    time = time.padStart(5,'0') 
  }
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(currentOutput === targetOutput,`current output1: ${currentOutput}, target output: ${targetOutput}`);

const currentOutput2 = formatAs12HourClock("23:01");
const targetOutput2 = "11:01 pm";
console.assert(currentOutput2 === targetOutput2,`current output2: ${currentOutput2}, target output: ${targetOutput2}`);

const currentOutput3 = formatAs12HourClock("07:34");
const targetOutput3 = "07:34 am";
console.assert(currentOutput3 === targetOutput3,`current output3: ${currentOutput3}, target output: ${targetOutput3}`);

const currentOutput4 = formatAs12HourClock("1100");
const targetOutput4 = ("11:00 am");
console.assert(currentOutput4 === targetOutput4,`current output4: ${currentOutput4}, target output: ${targetOutput4}`);

const currentOutput5 = formatAs12HourClock("8:24");
const targetOutput5 = "08:24 am";
console.assert(currentOutput5 === targetOutput5,`current output5: ${currentOutput5}, target output: ${targetOutput5}`);

const currentOutput6 = formatAs12HourClock("1:01");
const targetOutput6 = "01:01 am";
console.assert(currentOutput6 === targetOutput6,`current output6: ${currentOutput6}, target output: ${targetOutput6}`);
