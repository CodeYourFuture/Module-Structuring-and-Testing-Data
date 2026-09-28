function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  } else if (hours === 12){
    return `${time} pm`;
  }
  return `${time} am`;
}

export {formatAs12HourClock};
