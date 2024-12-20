function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
//* 3 times for totalHours, remainingMinutes and remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:
console.log(formatTimeDisplay(61));

// b) What is the value assigned to num when pad is called for the first time?
//* the first value assigned to num when pad is called is 0 > totalHours is 0 

// c) What is the return value of pad is called for the first time?
//* first return value of pad is "00" >  toString convert number to string and padStart(2, "0") make sure that it has two digits

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
//*the last value assigned to num is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
//* when we call pad(1), > it will convert to "1" and then padStart(2, "0") will change it to two digits so return value is "01"