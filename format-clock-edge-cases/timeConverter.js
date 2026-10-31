function formatAs12HourClock(time) {
    let hours = Number(time.slice(0, 2));
    const minutes = time.slice(3);

    const period = hours >= 12 ? "pm" : "am";

    if (hours === 0) {
        hours = 12;
    } else if (hours > 12) {
        hours -= 12;
    }

    const formattedHours =
        hours < 10 && hours !== 12 ? `0${hours}` : hours;

    return `${formattedHours}:${minutes} ${period}`;
}

export { formatAs12HourClock };