//const twelveHourClockTime = "20:53";
//const twentyFourHourClockTime = "08:53";

//variable names can't start with a number

// the times are in the wrong places ie:-20:53 is not a twelve hour time and as they are const they cant be directly changed

let twelveHourClockTime = "13:00";
let twelthHour = twelveHourClockTime.substring(
  0,
  twelveHourClockTime.length - 3

);

let sufix =".AM"
  

if (twelthHour >= 13) {
  twelthHour = twelthHour - 12;
  sufix =".PM"

}
let twelthMinutes = twelveHourClockTime.substring(
  2,
  twelveHourClockTime.length
);


let twentyFourHourClockTime = "04:59.am";
let twentyFour = twentyFourHourClockTime.substring(0,
      twentyFourHourClockTime.length -6)
      twentyFour = parseInt(twentyFour);


  if (twentyFourHourClockTime.match (/(pm|PM)/g)){
      twentyFour = twentyFour + 12;
     }
let twentyFourMinuies = twentyFourHourClockTime.substring(2, twentyFourHourClockTime.length -3);


console.log(`${twelthHour}${twelthMinutes}${sufix}`);
console.log(`${twentyFour}${twentyFourMinuies}`);
