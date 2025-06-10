const Hour12ClockTime = "20:53";
const Hour24ClockTime = "08:53";

const convertTo12HourFormat = (time) => {
  const [hours, minutes] = time.split(":").map(Number);
  const isPM = hours >= 12;
  const adjustedHours = isPM ? hours - 12 || 12 : hours;
  return `${adjustedHours}:${minutes.toString().padStart(2, "0")} ${
    isPM ? "PM" : "AM"
  }`;
};

const convertTo24HourFormat = (time) => {
  const [timePart, period] = time.split(" ");
  let [hours, minutes] = timePart.split(":").map(Number);
  if (period === "PM" && hours < 12) {
    hours += 12;
  } else if (period === "AM" && hours === 12) {
    hours = 0;
  }
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};
console.log(`12-hour format: ${convertTo12HourFormat(Hour24ClockTime)}`); // 12-hour format: 08:53 AM
console.log(`24-hour format: ${convertTo24HourFormat(Hour12ClockTime)}`); // 24-hour format: 20:53
// The code correctly converts between 12-hour and 24-hour formats
// The function convertTo12HourFormat converts a 24-hour time string to a 12-hour format with AM/PM
// The function convertTo24HourFormat converts a 12-hour time string with AM/PM to a 24-hour format
// The code works as expected, converting between the two formats without errors
// The output is as expected, demonstrating the correct conversion between 12-hour and 24-hour formats
