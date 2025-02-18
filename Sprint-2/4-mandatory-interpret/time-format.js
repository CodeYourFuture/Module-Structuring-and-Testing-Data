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

// You will need to play computer with this example - use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
// =============> write your answer here

// The pad function will be called 3 times - once for hours, once for minutes and once for seconds



// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here

/* 
  The function calculates 61 % 60 = 1 seconds, (61 - 1) / 60 = 1 minute, and (1 - 1) / 60 = 0 hours. 
  formatTimeDisplay(61) returns 0 hours since it’s less than an hour. 
  The first call to pad sets num to 0.
*/

// c) What is the return value of pad is called for the first time?
// =============> write your answer here

// The return value of pad is "00" because padStart adds a "0" to make it two digits long


// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// When pad is called last, num is 1 because the remaining seconds for 61 is 1 


// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here

// The return value assigned to num when pad is called last is "01" because pad adds a "0" to the number 1 to make it two digits 