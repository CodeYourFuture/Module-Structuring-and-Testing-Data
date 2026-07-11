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
// =============> write your answer here

// pad will be called 3 times when formatTimeDisplay is called. Once for totalHours, once for remainingMinutes and one for remainingSeconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

// The value assigned to num when pad is called for the first time is 00. This is because totalHours is calculated as (totalMinutes - remainingMinutes) / 60, which results in 0 when the input is 61 seconds.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// The return value of pad when it is called for the first time is 00. this is because the value of num is 0 and the pad function adds a 0 to the front of the string until the num characters has at least 2 characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

//The value assigned to num when pad is called for the last time  is 1. This is because the last call to pad is for remainingSeconds which is calculated as seconds % 60, the result of which is 1.

// e) What is the return value of pad when it is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The return value of pad when it is called for the last time is 01. This is because the pad function adds a 0 to the front of the string if the characters of the string are less than 2.