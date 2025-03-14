function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}
console.log(formatTimeDisplay(61))

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here
/* The pad function is called three times inside the formatTimeDisplay function:
Once for totalHours => to pad the hour value.
Once for remainingMinutes => to pad the minutes value.
Once for remainingSeconds =>to pad the seconds value. */

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
//0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//"00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//The last time pad is called is for remainingSeconds, which is calculated as remainingSeconds = 61 % 60 = 1 when formatTimeDisplay(61) is called.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
//The last call to pad is for remainingSeconds, which is 1. The padStart(2, "0") will pad this number to make it two digits.
//And return value =>"01"