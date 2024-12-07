// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const min = time.slice(3, 5);
  
  if (hours > 12) {
     const hoursPm = hours - 12
    //padding with 0 to make sure the string length is 2
     const adjustedHoursPm = String(hoursPm).padStart(2,0);
    return `${adjustedHoursPm}:${min} pm`;

  } else if (hours === 12){
    return `12:${min} pm`;

  }else if (hours === 00){
    return `12:${min} am`;

  }  
  //padding with 0 to make sure the string length is 2
  const adjustedHoursAm = String(hours).padStart(2,0);
    return `${adjustedHoursAm}:${min} am`;
};



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

// test to check function formatAs12HourClock works for 12:00
const currentOutput3 = formatAs12HourClock("12:00");

const targetOutput3 = "12:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

// test to check function formatAs12HourClock works for 00:00
const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "12:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

// test to check function formatAs12HourClock works for time thats not on the hour during am time
const currentOutput5 = formatAs12HourClock("06:35");
const targetOutput5 = "06:35 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

// test to check function formatAs12HourClock works for time thats not on the hour during pm time
const currentOutput6 = formatAs12HourClock("20:45");
const targetOutput6 = "08:45 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

// test to check function formatAs12HourClock works for time thats not on the hour during pm time
const currentOutput7 = formatAs12HourClock("00:45");
const targetOutput7 = "12:45 am";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);