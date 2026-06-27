function pad(num) {
  let numString = num.toString();
  while (numString.length < 2) {
    numString = "0" + numString;
  }
  return numString;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  return `${pad(totalHours)}:${pad(remainingMinutes)}:${pad(remainingSeconds)}`;
}

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> It will be called 3 times in line 15.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> 0 will be assigned to num when pad is called for the first time.

// c) What is the return value of pad is called for the first time?
// =============> 00 will be the return value when pad is called the first time.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> When pad is being called for the last time, it is on line 15 'pad(remainingSeconds)'. So a value of 1 will be assigned to it as remainingSeconds in line 10 was declared as 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> When pad is being called for the last time, it is on line 15 'pad(remainingSeconds)'. So a value of 1 will be assigned to function pad(num) where num is in value of 1. In line 3, as this string is smaller than 2 which means it is only in 1 digit, we add a '0' in front of it. So it return a numString '01' to the line 15.