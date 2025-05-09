const hour24ClockTime1 = "20:53";
const hour24ClockTime2 = "08:53";

function convertTo12Hours(time24) {
    let [hours, minutes] = time24.split(":");
    let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    return hours + ":" + minutes + " " + period;

}

console.log(convertTo12Hours("20:53"));
console.log(convertTo12Hours("08:53"));
