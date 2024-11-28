const time24Hour = "20:53";
const [hours, minutes] = time24Hour.split(":");

const period = hours >= 12 ? "PM" : "AM";
const hours12 = hours % 12 || 12; // Convert '0' to '12' for midnight/noon

const time12Hour = `${hours12}:${minutes} ${period}`;

console.log(time12Hour);