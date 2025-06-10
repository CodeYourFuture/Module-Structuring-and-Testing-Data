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
// 3 times, once for each of totalHours, remainingMinutes, and remainingSeconds. 

// Call formatTimeDisplay with an input of 61, now answer the following:

// b) What is the value assigned to num when pad is called for the first time?
// =============> write your answer here
// The value assigned to num when pad is called for the first time is 0. This is because totalHours is calculated as (61 - 1) / 60, which equals 0. 
// The remaining seconds are 1, and the remaining minutes are also 1, so the first call to pad is for totalHours, which is 0.

// c) What is the return value of pad is called for the first time?
// =============> write your answer here
// The return value of pad when called for the first time is "00". This is because pad(0) converts the number 0 to a string and pads it with leading zeros 
// to ensure it has a length of at least 2 characters.

// d) What is the value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The value assigned to num when pad is called for the last time in this program is 1. This is because the last call to pad is for remainingSeconds,
// which is calculated as 61 % 60, resulting in 1. The pad function will then convert this number to a string and pad it with leading zeros, resulting in "01".

// e) What is the return value assigned to num when pad is called for the last time in this program?  Explain your answer
// =============> write your answer here
// The return value assigned to num when pad is called for the last time in this program is "01". This is because the last call to pad is for remainingSeconds,
// which is 1. The pad function converts this number to a string and pads it with leading zeros to ensure it has a length of at least 2 characters, 
// resulting in "01".
