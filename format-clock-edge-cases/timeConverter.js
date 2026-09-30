function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));
  const min = Number(time.slice(-2));

//   if (hours > 12) {
//     return `${hours - 12}:${min} pm`;
//   }
//   return `${time} am`;
// }
  if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${(min).toString().padStart(2, "0")} pm`;
  }
  return `${time} am`;
}

export {formatAs12HourClock};

console.log(formatAs12HourClock("18:02"));

