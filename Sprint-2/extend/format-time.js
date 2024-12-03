// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let hours = Number(time.slice(0, 2));
  let minutes = Number(time.slice(3, 5));
  let minuteStr = "";
  //"Cant use NUmber function on minutes because if minutes is 00 it defaults to a single 0 which we cannot use in time to display the minutes" So I need to create an if else statement to take care of these cased myself.
  if ((minutes < 10 && minutes >= 0)) {
    minuteStr = `0${minutes}`;
  }
  else if (minutes >= 10 && minutes <= 59) {
    minuteStr = minutes;
  }
  else if (minutes > 59) {
    // code to deal with invalid minute value (although not needed in this exercise).
  }
  else {
    "The minutes on the time is incorrect and out of the normal range."
  }

  if (hours > 12) {
    if (hours - 12 >= 10) {
      return `${hours - 12}:${minuteStr} pm`;
    }
    else {
      return `0${hours - 12}:${minuteStr} pm`;
    }

  }
  else if (hours === Number("00")) {
    return `12:${minuteStr} am`;
  }
  else if (hours === 12) {
    return `${hours}:${minuteStr} pm`;
  }
  else if (hours < 12 && hours >= 1) {
    if (hours < 10 && hours >= 1) {
      hours = `0${hours}`;
    }
    return `${hours}:${minuteStr} am`;
  }

}
//I used control flow to check the edge case scenarios, I'm not sure if I used it all correctly but i tried to implement rules according to the regualr time that we use.
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

const currentOutput3 = formatAs12HourClock("21:00");
const targetOutput3 = "09:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("23:59");
const targetOutput5 = "11:59 pm";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("00:59");
const targetOutput6 = "12:59 am";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);