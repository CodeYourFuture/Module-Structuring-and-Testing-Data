/*function formatAs12HourClock() {}

const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/


/*function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("09:00");
const targetOutput = "09:00 am";

console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);*/

function formatAs12HourClock(time) {
  //time format hh:mm in 24h time

  let hours = time[0] + time[1];
  let mint = time[3] + time[4]; // not count the colon 
  hours = parseInt(hours);
  hours = hours % 12;
  hours = hours.toString();
  return hours + ":" + mint ;


}

console.log(formatAs12HourClock("15:34"))



//Console assert practice:

// const currentOutput7 = formatAs12HourClock("22:00")
//    const targetOutput7 = "10:00 pm";

//    console.assert(
//     currentOutput7 === targetOutput7,
//     `curent output: ${currentOutput7}, target output: ${targetOutput7}`

//    )

