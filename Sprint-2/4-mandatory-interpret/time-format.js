function pad(num) {
  return num.toString().padStart(2, "0");
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60; //
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
// 3 times 

// Call formatTimeDisplay with an input of 61, now answer the following:
// 61 % 6 = 1, (61 - 1 ) / 60 = 1 , 1 % 60 = 1 , ( 1 - 1 )/60 = 0

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// the first value assigned to num is 0

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
//num.toString().pad(2,"0") the answer is "00"

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// the last value assigned to num is 1
// the last call for pad() is for the (remainingSeconds) which is 1

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// the return value is "01"
// the pad() function pads the single-digit 1 with a leading zero to make it 01
// calling .toString() on a number, it converts that number into a string, so "01"
 