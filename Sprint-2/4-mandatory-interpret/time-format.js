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
console.log(formatTimeDisplay(61));

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// 3 times.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// The first time pad is called the value assigned is totalHours.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

//The return value of pad is called the first time is "00". That is because there is 0 hours and plus the pad method it returns "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

//The value assigned to num when pad is called the last time is remainingSeconds.

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

/*The return value is "01", that is the remainingSeconds, because the formatTimeDisplay input is 61, 
to get the remainingSeconds we tae the remainder after dividing by 60 which gives up 1, 
and using the pad method the outcome should have 2 digits, if it has only one digit a "0" is added in the front.*/
