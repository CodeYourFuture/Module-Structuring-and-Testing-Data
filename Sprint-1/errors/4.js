//const 12HourClockTime = "20:53";
//const 24hourClockTime = "08:53";

  function convert12To24(time) {
  const [hours, minutes] = time.split(":");
  let hour = parseInt(hours);
  const period = time.includes("PM") ? "PM" : "AM";

  if (period === "PM" && hour < 12) {
      hour += 12;
  } else if (period === "AM" && hour === 12) {
      hour = 0;
  }

  return `${hour.toString().padStart(2, '0')}:${minutes}`;
}

function convert24To12(time) {
  const [hours, minutes] = time.split(":");
  let hour = parseInt(hours);
  const period = hour >= 12 ? "PM" : "AM";

  if (hour > 12) {
      hour -= 12;
  } else if (hour === 0) {
      hour = 12;
  }

  return `${hour}:${minutes} ${period}`;
}

const twelveHourClockTime = "08:53 PM"; // Example input for 12-hour format
const twentyFourHourClockTime = "20:53"; // Given input for 24-hour format

const convertedTo24 = convert12To24(twelveHourClockTime);
const convertedTo12 = convert24To12(twentyFourHourClockTime);

console.log(`12-hour to 24-hour: ${convertedTo24}`); // Output: 20:53
console.log(`24-hour to 12-hour: ${convertedTo12}`); // Output: 8:53 PM
