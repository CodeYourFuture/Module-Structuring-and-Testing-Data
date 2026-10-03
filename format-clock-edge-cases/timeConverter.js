// function formatAs12HourClock(time) {

//   const hours = Number(time.slice(0, 2));

//   if (hours > 12) {
//     return `${hours - 12}:00 pm`;
//   }
//   return `${time} am`;
// }

// export {formatAs12HourClock};

function formatAs12HourClock(time){
  const [hourPart, minutePart] = time.split(":");
  const hours = Number(hourPart);

  let period;
  if(hours < 12){
    period = "am";
  } else {
    period = "pm";
  }

  let displayHour = hours % 12;
  if(displayHour === 0){
    displayHour = 12;
  } 
}
export {formatAs12HourClock};
