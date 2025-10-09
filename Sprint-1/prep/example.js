function to24hourtime(hour, minute, period) {
  //if the period is pm then add 12 to hours.

  if ((hour = "12") && (minute = "00")) {
    return "0000";
  }
}

//for hours and minute make sure they are in 3 digit.
//return the hours and minute as a 4 char string.

// hour will always range from 1 to 12 (inclusive)
// minute will always range from 0 to 59 (inclusive)
// period will always be either "am" or "pm"

console.log(to24hourtime());
