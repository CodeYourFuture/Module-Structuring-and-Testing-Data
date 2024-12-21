// This is the latest solution to the problem from the prep.
// Your task is to write tests for as many different groups of input data or edge cases as you can, and fix any bugs you find.

function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
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

const currentOutput3 = formatAs12HourClock("19:00");
const targetOutput3 = "7:00 pm";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);


const currentOutput4 = formatAs12HourClock ("03:00");
const targetOutput4 = "03:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  `current output: ${currentOutput4}, target output: ${targetOutput4}`
  );

  const currentOutput5 = formatAs12HourClock ("01:00");

  const targetOutput5= "01:00 am";

  console.assert(
    currentOutput5 === targetOutput5,
    `curent output: ${currentOutput5}, target output: ${targetOutput5}`
  )

  const currentOutput6 = formatAs12HourClock ("04:00");
  const targetOutput6= "04:00 am";
   console.assert(
    currentOutput6 === targetOutput6,
    `curent output: ${currentOutput6}, target output: ${targetOutput6}`
   )


   const currentOutput7 = formatAs12HourClock("22:00")
   const targetOutput7 = "10:00 pm";

   console.assert(
    currentOutput7 === targetOutput7,
    `curent output: ${currentOutput7}, target output: ${targetOutput7}`

   )
   
   const currentOutput9 = formatAs12HourClock("00:00")
   const targetOutput9 = "00:00 am";
   console.assert(
   currentOutput9 === targetOutput9,
    `curent output: ${currentOutput9}, target output: ${targetOutput9}`

   )