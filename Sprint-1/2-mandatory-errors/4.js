//const twelveHourClockTime = "20:53";
//const twentyFourHourClockTime = "08:53";

//variable names can't start with a number

// the times are in the wrong places ie:-20:53 is not a twelve hour time and as they are const they cant be directly changed

let twelveHourClockTime = "20:53";
let twelthHour = twelveHourClockTime.substring(0, twelveHourClockTime.length -3);
    if (twelthHour >12) {twelthHour = twelthHour - 12};
let twelthMinutes = twelveHourClockTime.substring(2, twelveHourClockTime.length)

let twentyFourHourClockTime = "08:53";


console.log(`${twelthHour}${twelthMinutes}`);
console.log(twentyFourHourClockTime);