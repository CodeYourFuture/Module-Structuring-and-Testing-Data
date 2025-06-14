// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  if (typeof time !=="string" || time.length !== 5 || time[2] !== ":") {
    throw new Error("Invalid time format. Please use 'hh:mm' format.");
  }
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  if (hours === 12) {
    return `12:${minutes} pm`;
  } else if (hours === 0) {
    return `12:${minutes} am`; 
  }else if (hours < 12) {
      return `${time} am`;  
      }else
  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
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

try {
  console.log(formatAs12HourClock("08:00"));
  console.log(formatAs12HourClock("23:00"));
  console.log(formatAs12HourClock("12:00"));
  console.log(formatAs12HourClock("12:30"));
  console.log(formatAs12HourClock("00:00"));
  console.log(formatAs12HourClock("15:30"));
  console.log(formatAs12HourClock("01:00"));
  console.log(formatAs12HourClock("11:25"));
  console.log(formatAs12HourClock("13:00"));
}catch (error) {
  console.error(error.message); 
  }

// The first bug was found in the code, it does not handle the case when the time is 12:00 correctly.
// Another bug is that the return value from the function is not in the correct format for 12-hour clock.
// Another bug was that the function does not handle when time is < 12 .
// Another bug in the  return statement for hours > 12, it should return the time in the format of "hh:mm pm" instead of just "hh pm".
// Added error handling for invalid time formats.

