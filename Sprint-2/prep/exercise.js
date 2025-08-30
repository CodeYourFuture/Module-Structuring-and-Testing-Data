function formatAs12HourClock(time){
    let hour = Number(time.slice(0,2))
    let min = time.slice(3)
    if (hour > 12){
        hour = hour - 12;
        newTime = `${hour}:${min}`
        return `${newTime} PM`
    }
    return `${time} AM`
}

const expectedOutput = "08:00 AM";
const actualOutput = formatAs12HourClock("08:00");

console.assert (actualOutput === expectedOutput, `actual Output:${actualOutput}, expected Output:${expectedOutput}`);

const xpectedOutput = "11:00 PM";
const ctualOutput = formatAs12HourClock("23:00");

console.assert(
  ctualOutput === xpectedOutput,
  `actual Output:${ctualOutput}, expected Output:${xpectedOutput}`
);