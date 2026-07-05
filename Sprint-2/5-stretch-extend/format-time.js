// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
    const hours = time.slice(0, 2);
    const mins = time.slice(3);
    if (hours > 12) {
        const hoursIsPastMidday = hours - 12;
        return `${hoursIsPastMidday}:${mins}pm`
    } else if (hours === "12") {
        return `${hours}:${mins}pm`
    }else if (hours === "00"){
        return `12:${mins}am`
    }
    return `${time}am`
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00am";
console.assert(
    currentOutput === targetOutput,
    `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00pm";
console.assert(
    currentOutput2 === targetOutput2,
    `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00am";
console.assert(
    currentOutput3 === targetOutput3,
    `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("17:45");
const targetOutPut4 = "5:45pm";
console.assert(
    currentOutput4 === targetOutPut4,
    `current output: ${currentOutput4}, target output: ${targetOutPut4}`
);

const currentOutput5 = formatAs12HourClock("00:01");
const targetOutPut5= "12:01am";
console.assert(
    currentOutput5 === targetOutPut5,
    `current output: ${currentOutput5}, target output: ${targetOutPut5}`
);

const currentOutput6 = formatAs12HourClock("00:59");
const targetOutPut6= "12:59am";
console.assert(
    currentOutput6 === targetOutPut6,
    `current output: ${currentOutput6}, target output: ${targetOutPut6}`
)

const currentOutput7 = formatAs12HourClock("12:00");
const targetOutPut7= "12:00pm";
console.assert(
    currentOutput7 === targetOutPut7,
    `current output: ${currentOutput7}, target output: ${targetOutPut7}`
)
