// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  let [hours, minutes] = time.split(":");

  if(!minutes) {
    minutes = "00"
  }
    
  hours = hours.padStart(2,"0");
  numericHours = Number(hours);
  minutes = minutes.padStart(2,"0");
  
  if (numericHours > 12) {
    return `${(numericHours - 12).toString().padStart(2,"0")}:${minutes} pm`;
  }
  if (hours === "12") {
    return `12:${minutes} pm`;
  }
  return `${hours}:${minutes} am`;
}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

const currentOutput2 = formatAs12HourClock("23:10");
const targetOutput2 = "11:10 pm";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

const currentOutput3 = formatAs12HourClock("9");
const targetOutput3 = "09:00 am";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);

const currentOutput4 = formatAs12HourClock("22:10");
const targetOutput4 = "10:10 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);

const currentOutput5 = formatAs12HourClock("00:00");
const targetOutput5 = "00:00 am";
console.assert(
  currentOutput5 === targetOutput5,
  `current output: ${currentOutput5}, target output: ${targetOutput5}`
);

const currentOutput6 = formatAs12HourClock("12");
const targetOutput6 = "12:00 pm";
console.assert(
  currentOutput6 === targetOutput6,
  `current output: ${currentOutput6}, target output: ${targetOutput6}`
);

const currentOutput7 = formatAs12HourClock("15:1");
const targetOutput7 = "03:01 pm";
console.assert(
  currentOutput7 === targetOutput7,
  `current output: ${currentOutput7}, target output: ${targetOutput7}`
);

const currentOutput8 = formatAs12HourClock("15:7");
const targetOutput8 = "03:07 pm";
console.assert(
  currentOutput8 === targetOutput8,
  `current output: ${currentOutput8}, target output: ${targetOutput8}`
);

 console.log(currentOutput)





//  function formatAs12HourClock(time) {
//   const hours = time.slice(0, 2).padStart(2,"0"); //Number deleted from beginning to apply .padStart on value
//   const minutes = time.slice(3,5).padStart(2,"0");
//   if (hours > 12) {
//     return `${hours - 12}:${minutes} pm`; //minutes had been ignored, so we defined minutes variable in line 6 and assigned with minutes index of input and use it here
//   }
//   if (hours === 12) {
//     return `${time} pm`; //when hours was equal to 12, function returns it as "am"
//   }
//   return `${time.padStart(5,0)} am`;
// }