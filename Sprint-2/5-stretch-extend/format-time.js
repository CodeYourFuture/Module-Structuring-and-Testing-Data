// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any
// bugs you find.

// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any
// bugs you find.

function formatAs12HourClock(time) {
    const hours = Number(time.slice(0, 2)); // "hours" variable represents first two digits of the time string turned into number
    const minutes = Number(time.slice(-2));// "mninutes" variable represents last two digits of the "time" string converted to number
    if (hours === 12) {
        return `${time}pm` // if time is "12:00" it will show 
        //12:00 pm
    } else if (hours === 24 && time.slice(-2) === "00") {
        return `00:00am`;
    } else if (hours === 24 && minutes > 0) {
        return `00:${minutes}am`
        
    }else if (hours > 12) {
        return `${hours - 12}:${minutes}pm`;
    }
  return `${time}am`;
}
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:35");
const targetOutput2 = "11:35pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output2: ${currentOutput2}, target output2: ${targetOutput2}`
);
const currentOutput3 = formatAs12HourClock("00:00");// 
const targetOutput3 = "00:00am";// expecting new test to return "00:00 am"
console.assert(
  currentOutput3 === targetOutput3, 
  `current output3: ${currentOutput3}, target output3: ${targetOutput3}`
); // if currentOutput3 and targetOutput3 do not match, the assertion message will be given.

const currentOutput4 = formatAs12HourClock("12:00");//
const targetOutput4 = "12:00pm"; // expected output for "12:00" is "12:00 pm"
console.assert(
  currentOutput4 === targetOutput4,
  `current output4: ${currentOutput4}, target output4: ${targetOutput4}`
);// if currentOutput and targetOutput do not match, the assertion message will be given.
const currentOutput5 = formatAs12HourClock("24:00");
const targetOutput5 = "00:00am";
console.assert(
    currentOutput5 === targetOutput5,
    `current output5: ${currentOutput5}, target output5: ${targetOutput5}`
  ); // if 24:00 is entered and the output is not "00:00 am" the assertion message will be given

// below is test to try with minutes
const currentOutput6 = formatAs12HourClock("22:55");
const targetOutput6 = "10:55pm";
console.assert(currentOutput6 === targetOutput6, `current outpu6: ${currentOutput6}, target output6: ${targetOutput6}`);

// following test tests what happens if time passed 24:00 hours.
const currentOutput7 = formatAs12HourClock("24:25");
const targetOutput7 = "00:25am";
console.assert(currentOutput7 === targetOutput7, `current output7: ${currentOutput7}, target output: ${targetOutput7}`)




