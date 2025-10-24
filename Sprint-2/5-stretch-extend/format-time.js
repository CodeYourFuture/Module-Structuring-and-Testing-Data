// This is the latest solution to the problem from the prep.
// Make sure to do the prep before you do the coursework
// 
// function formatAs12HourClock(time) {
//   const hours = Number(time.slice(0, 2));
//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// const currentOutput = formatAs12HourClock("08:00");
// const targetOutput = "08:00 am";
// console.assert(
//   currentOutput === targetOutput,
//   `current output: ${currentOutput}, target output: ${targetOutput}`
// );

// const currentOutput2 = formatAs12HourClock("23:00");
// const targetOutput2 = "11:00 pm";
// console.assert(
//   currentOutput2 === targetOutput2,
//   `current output: ${currentOutput2}, target output: ${targetOutput2}`
// );
// const currentOutput3=formatAs12HourClock("00:00");
// const targetOutput3="12:00 am";
// console.assert(currentOutput3===targetOutput3,
//   `current output: ${currentOutput3}, target output: ${targetOutput3}`
// )
// const currentOutput4=formatAs12HourClock("12:00");
// const targetOutput4="12:00 pm";
// console.assert(currentOutput4===targetOutput4,
//   `current output: ${currentOutput4}, target output: ${targetOutput4}`
// )


// This is my version 
function TimeAs12hours(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);
  if (hours === 0) {
    return `12:${minutes} am`;
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  } else if (hours === 12) {
    return `${time} pm`;
  }
  return `${time} am`;
}

let currentTime = TimeAs12hours("12:02");
let targetTime = "12:02 pm";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);
currentTime = TimeAs12hours("10:30");
targetTime = "10:30 am";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);

currentTime = TimeAs12hours("04:30");
targetTime = "04:30 am";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);

currentTime = TimeAs12hours("13:30");
targetTime = "1:30 pm";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);
currentTime = TimeAs12hours("23:09");
targetTime = "11:09 pm";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);

currentTime = TimeAs12hours("00:00");
targetTime = "12:00 am";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);

currentTime=TimeAs12hours("12:00");
targetTime="12:00 pm";
console.assert(
  currentTime === targetTime,
  `current time:${currentTime}, Target Time:${targetTime}`
);