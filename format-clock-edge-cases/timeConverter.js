function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2).padStart(2, 0));
  const minutes = time.slice(3, 5);

  if (hours === 0) {
    return `12:${minutes} AM`
  }
  if (hours === 12) {
    return `12:${minutes} PM`;
  }
  if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  }
  return `${time} AM`;
}

export {formatAs12HourClock};
