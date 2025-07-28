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

// You will need to play computer with this example - use the 
// Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many 
// times will pad be called?
// =============> write your answer here
// 3 times. It is called once for hours, 
// once for minutes and once for seconds.

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when 
// pad is called for the first time?
// =============> write your answer here
//  The value assigned to num when pad is 
// called for the first time is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00". 
// This is because it pads the number 0 with leading zeros to 
// ensure it has a length of 2 characters.

// d) What is the value assigned to num when pad 
// is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time is 1.
// This is because the last call to pad is for the remaining seconds
// which is 61 % 60 = 1.

// e) What is the return value assigned to num when 
// pad is called for the last time in this program?  
// Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for 
// the last time is "01".
// This is because it applies .padStart(2, "0"), which returns 
// a two character string, with a leading zero to ensure 
// it has a minimum length of 2.
