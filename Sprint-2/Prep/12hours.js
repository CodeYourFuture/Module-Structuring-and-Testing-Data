function formatAs12HourClock(time) {
  const hour = Number(time.slice(0, 2));
  const minute = time.slice(3);

  if (hour === 0) {
    return `12:${minute} am`;
  } else if (hour === 12) {
    return `12:${minute} pm`;
  } else if (hour > 12) {
    return `${hour - 12}:${minute} pm`;
  } else {
    return `${time} am`;
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
const currentOutput3 = formatAs12HourClock("00:00");
const targetOutput3 = "12:00 am";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);
console.log(currentOutput3,targetOutput3);

const currentOutput4 = formatAs12HourClock("12:00");
const targetOutput4 = "12:00 pm";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
);
