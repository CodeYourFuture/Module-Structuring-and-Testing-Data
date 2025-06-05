function pad(num) {
  //adds leading 0s to string until it reaches length 2
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; //seconds remaining after whole minutes removed from timeInSeconds
  const totalMinutes = (seconds - remainingSeconds) / 60; //number of whole minutes remaining when remaining seconds are removed from timeInSeconds
  const remainingMinutes = totalMinutes % 60; //minutes remaining after whole minutes removed
  const totalHours = (totalMinutes - remainingMinutes) / 60; //whole hours after remaining minutes removed

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`; //00hh:00mm:00ss
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> 3, all on line 12

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61)); // ==> 00:01:01

// b) What is the value assigned to num when pad is called for the first time?
// =============> 1
// oops, that's wrong, it's 0. totalHours will have a value of zero when passed in.

// c) What is the return value of pad is called for the first time?
// =============> 01
// also wrong, it's 00. follows from above.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 1
//              looking at the output from the console log above, the number of seconds remaining is 1
//              this was computed at line 7: remainingSeconds = seconds % 60;

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> 01
//                .padStart(2,"0") means pad the string (created from num) with 0s, at the beginning of the string, until the length of the string is = 2
