function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    const time = hours - 12;
    if (time < 10) {
      return `0${time}:00 pm`;
    }
    return `${hours - 12}:00 pm`;
  }

  if (hours < 10) {
    return `0${hours}:00 am`;
  }

  return `${time} am`;
}

export { formatAs12HourClock };
